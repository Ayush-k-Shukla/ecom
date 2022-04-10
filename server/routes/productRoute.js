import express from 'express';
import { createProduct, getProducts } from '../controllers/product.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getProducts);

router.post('/', auth, createProduct);

export default router;
