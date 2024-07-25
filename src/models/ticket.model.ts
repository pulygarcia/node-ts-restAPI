import mongoose, {Schema} from "mongoose";

const ticketsSchema:Schema = new mongoose.Schema({
    items: [{
        type: Object,
        required: true
    }],
    date: {
        type: Date,
        required: true
    },
    collected: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
    },
})

const tickets = mongoose.model('tickets', ticketsSchema);

export default tickets;