import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  Price: { type: Number, required: true },
  id: { type: String },
  selectedFile: { type: String },
  listedBy: { type: String },
  description: { type: String },
  listedAt: {
    type: Date,
    default: new Date(),
  },
});

const Product = mongoose.model('Product', productSchema);
export default Product;
