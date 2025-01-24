import dotenv from 'dotenv';
import {connectDB} from './src/db/connectDB.js';
import app from './app.js';
// import { seedOrders } from './src/utils/fakeOrder.js';


dotenv.config();
const PORT = process.env.PORT || 5231;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on PORT ${PORT}`);
            // seedOrders()
            
        });
    })
    .catch((err) => {
        console.error('Failed to connect to DB:', err);
    });
