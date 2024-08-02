import mongoose, {Schema} from "mongoose";
import { randomToken } from "../lib/utils";

const userSchema:Schema = new mongoose.Schema({
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

const users = mongoose.model('users', userSchema);

export default users;