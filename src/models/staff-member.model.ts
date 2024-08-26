import mongoose, {Schema} from "mongoose";

const staffMemberSchema:Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    charge: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true
    },
    adress: {
        type: String,
        required: true,
    },
    active:{
        type: Boolean,
        default: true
    }
})

const staffMember = mongoose.model('staffMember', staffMemberSchema);

export default staffMember;