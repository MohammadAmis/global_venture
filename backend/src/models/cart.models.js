import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId, // Reference to the user
        ref: 'User', // Assuming you have a User model
        required: true,
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId, // Reference to the product
        ref: 'Product', // Assuming you have a Product model
        required: true,
    },
    product_name: {
        type: String,
        required: true,
    },
    product_image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        default: 1,
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'cancelled'], // Define allowed statuses
        default: 'pending',
    }
}, { timestamps: true }); // Adds createdAt and updatedAt fields

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
