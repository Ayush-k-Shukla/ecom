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
//tested
export const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    res.status(200).json({ data: product });
  } catch (error) {
    console.log(error);
  }
};
//tested
export const updateProduct = async (req, res) => {
  const { id: _id } = req.params;
  const product = req.body;
  if (!req.userId) res.status(401).json({ message: 'user is not logged in' });
  if (!mongoose.Types.ObjectId.isValid(_id))
    res.status(404).send(`No product with given id exits in db`);

  const updatedproduct = await Product.findByIdAndUpdate(
    _id,
    { _id, ...product },
    {
      new: true,
    }
  );

  res.json(updatedproduct);
};
//tested
export const deleteProduct = async (req, res) => {
  const { id: _id } = req.params;
  if (!req.userId) res.status(401).json({ message: 'user is not logged in' });
  if (!mongoose.Types.ObjectId.isValid(_id))
    res.status(404).send(`No product with given id exits in db`);

  const updatedproduct = await Product.findByIdAndRemove(_id);

  res.json({ message: 'product deleted succesfully' });
};
