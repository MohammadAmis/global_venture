import mongoose from 'mongoose'; // Import mongoose
import { faker } from '@faker-js/faker'; // Used for generating mock data
import Order from '../models/order.models.js'; // Import Order model

export const seedOrders = async () => {
    try {
        // Clear existing orders
        await Order.deleteMany({});
        console.log("Existing orders cleared");

        // Generate 20 mock orders
        const orders = [];
        for (let i = 0; i < 20; i++) {
            const price = faker.number.float({ min: 10, max: 100, precision: 0.01 });
            const quantity = faker.number.int({ min: 1, max: 5 });
            const total = price * quantity;

            orders.push({
                order_id: faker.string.uuid(),
                user_id: new mongoose.Types.ObjectId(), // Mock user ID
                product_id: new mongoose.Types.ObjectId(), // Mock product ID
                product_name: faker.commerce.productName(),
                product_image: faker.image.url(),
                price: parseFloat(price),
                quantity,
                total,
                address: faker.location.streetAddress(),
                status: faker.helpers.arrayElement([
                    "pending",
                    "processed",
                    "shipped",
                    "delivered",
                    "cancelled",
                ]),
                payment_method:faker.helpers.arrayElement(['COD','UPI','IB']),
                order_date: faker.date.past({ years: 1 }), // Mock date within the past year
                shipping_date: faker.datatype.boolean()
                    ? faker.date.soon({ days: 10 }) // Mock shipping date within the next 10 days
                    : undefined,
            });
        }

        // Insert mock orders into the database
        await Order.insertMany(orders);
        console.log("20 mock orders generated");

        // Close the database connection
        // await mongoose.disconnect();
        console.log("Disconnected from MongoDB");
    } catch (error) {
        console.error("Error seeding orders:", error);
        process.exit(1);
    }
};
