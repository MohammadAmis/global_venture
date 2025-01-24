import express from 'express';
import { registerUser, loginUser,fetchProduct } from '../controllers/user.controllers.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/fetch-products',fetchProduct)

export default router;
