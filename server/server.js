import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

//cors
const corsOptions = {
  //give all name to allowing ports
  credentials: true,
  origin: ['http://localhost:3000'],
};

app.use(cors(corsOptions));

//route import
import adminRoutes from './routes/adminRoute.js';
import productRoutes from './routes/productRoute.js';

app.use('/admin', adminRoutes);
app.use('/products', productRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.createConnection(process.env.MONGO_URI);
connection
  .once('open', () => {
    console.log('db connected.');
  })
  .on('error', (err) => {
    console.error('Error : ' + err);
  });

app.get('/', (req, res) => {
  res.send('Listening for ecom api');
});
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
