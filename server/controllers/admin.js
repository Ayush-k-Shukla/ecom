import mongoose from 'mongoose';
import Admin from '../models/admin.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// working fine tested
export const signIn = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  try {
    const existingAdmin = await Admin.findOne({ email: email });
    console.log(`Admin : ${existingAdmin}`);
    if (!existingAdmin) {
      return res.status(404).json({ message: 'Admin does not exist' });
    }
    const isPassword = await bcrypt.compare(password, existingAdmin.password);
    if (!isPassword) {
      return res.status(400).json({ message: 'Incorrect Password' });
    }
    const token = jwt.sign(
      {
        email: existingAdmin.email,
        id: existingAdmin._id,
      },
      process.env.SECRET_JWT_STRING,
      { expiresIn: '1h' }
    );

    res.status(200).json({ result: existingAdmin, token });
  } catch (error) {
    res.status(500).json({ meassage: 'something went wrong' });
  }
};

//working fine tested
export const signUp = async (req, res) => {
  console.log(req.body);
  const { email, password, firstName, lastName } = req.body;
  try {
    const isAdmin = await Admin.findOne({ email });
    if (isAdmin) {
      res.status(400).json('Email is already taken');
    }
    const salt = await bcrypt.genSalt(12);
    const hashPassword = await bcrypt.hash(password, salt);

    const admin = await Admin.create({
      email: email,
      password: hashPassword,
      name: `${firstName} ${lastName}`,
    });
    const token = jwt.sign(
      {
        email: admin.email,
        id: admin._id,
      },
      process.env.SECRET_JWT_STRING,
      { expiresIn: '1h' }
    );
    res.status(201).json({ result: admin, token });
  } catch (error) {
    res.status(500).json({ message: 'something went wrong' });
  }
};
