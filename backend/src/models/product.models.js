import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        unique: true,
        default: () => new mongoose.Types.ObjectId(), // Automatically assign a unique value
    },
    name: {
        type: String,
        required: true,
        lowercase: true,  // Automatically converts name to lowercase
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    purchasing_price: {
        type: Number,
        required: true,
    },
    discount_price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,  // Store the Cloudinary URL of the image
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        default: 0, // Default rating if none is provided
    },
    reviews: {
        type: [String], // Array of review strings
        default: [], // Default empty array
    },
    stock: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['available', 'unavailable'], // Define allowed values
        default: 'available', // Default status is 'available'
    },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

const Product = mongoose.model('Product', productSchema);

export default Product;
