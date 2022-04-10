import mongoose from 'mongoose';
import Product from '../models/product.js';

//checked successfully
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ _id: -1 });
    res.status(200).json({
      data: products,
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

//checked sucessfully
export const createProduct = async (req, res) => {
  const product = req.body;
  console.log(req.body);
  if (!req.userId) res.status(401).json({ message: 'user is not logged in' });
  const newProduct = new Product({
    ...product,
    listedBy: req.userId,
    listedAt: new Date().toISOString(),
  });
  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
