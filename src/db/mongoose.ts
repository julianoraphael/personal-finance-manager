// src/db/mongoose.ts
import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://localhost:27017/expenses_db'; // Replace with your MongoDB connection string

mongoose.connect(MONGODB_URI);

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});
