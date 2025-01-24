import mongoose from 'mongoose';
const orderSchema = new mongoose.Schema({
    order_id: {
        type: String,
        required: true,
        unique: true,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
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
    total: {
        type: Number,
        required: true,
        validate: {
            validator: function () {
                return this.total === this.price * this.quantity;
            },
            message: 'Total must be equal to price multiplied by quantity',
        },
    },
    address: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'processed', 'shipped', 'delivered', 'cancelled'],
        default: 'pending',
    },
    payment_method: {
        type: String,
        enum: ['COD', 'UPI', 'IB'], // Restrict values to these options
        required: true,
    },
    order_date: {
        type: Date,
        default: Date.now,
    },
    shipping_date: {
        type: Date,
        required: false,
    },
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

export default Order;
