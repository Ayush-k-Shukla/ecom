import express from 'express';
import {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
} from '../controllers/product.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProduct);

// admin routes
router.post('/', auth, createProduct);
router.patch('/:id', auth, updateProduct);
router.delete('/:id', auth, deleteProduct);

export default router;
