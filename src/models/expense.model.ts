// src/models/expense.model.ts
import mongoose, { Schema, Document } from 'mongoose';

interface ExpenseDocument extends Document {
  description: string;
  amount: number;
  // Add other properties as needed
}

const expenseSchema = new Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  // Add other properties and their types as needed
});

const Expense = mongoose.model<ExpenseDocument>('Expense', expenseSchema);

export default Expense;
