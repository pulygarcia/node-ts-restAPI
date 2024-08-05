import mongoose, {Schema} from "mongoose";
import bcrypt from 'bcrypt';
import { randomToken } from "../lib/utils";

export interface User {
    userName: string;
    password: string;
    token: string;
    verified: boolean;
    isModified(path: string): boolean;
    checkPassword(inputPassword: string): Promise<boolean>;
}

const userSchema:Schema<User> = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    token: {
        type: String,
        default: () => randomToken()
    },
    verified:{
        type: Boolean,
        default: false
    }
})


//hash password
userSchema.pre('save', async function(next:any) {
    const saltRounds = 10;

    if(!this.isModified('password')){  //If the password is already hashed, dont do nothing and continue.
        next();
    }

    const salt = await bcrypt.genSalt(saltRounds);
    this.password = await bcrypt.hash(this.password, salt);

    next();
});

//Create a method for compare passwords
userSchema.methods.checkPassword = async function(inputPassword:string) {
    return await bcrypt.compare(inputPassword, this.password)
}

const users = mongoose.model('users', userSchema);

export default users;