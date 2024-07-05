import mongoose, {Schema} from "mongoose";

const itemsSchema:Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Snack', 'Meal', 'Dessert', 'Drink', 'Appetizer']
    },
})

const items = mongoose.model('items', itemsSchema);

export default items;