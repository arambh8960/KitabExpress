import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    name: String,
    title: String,
    price: Number,
    category: String,
    image: String
}, { _id: false }); // Prevent Mongoose from creating a second _id for subdocuments

const cartSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    items: [itemSchema]
});

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
