// src/controllers/expenses.controller.ts
import { Request, Response } from 'express';
import Expense from '../models/expense.model';

const expensesController = {
  // Add an expense
  addExpense: async (req: Request, res: Response) => {
    try {
      const newExpense = new Expense(req.body);
      await newExpense.save();
      res.status(201).json({ message: 'Expense added successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error adding the expense' });
    }
  },

  // Get all expenses
  getAllExpenses: async (req: Request, res: Response) => {
    try {
      const expenses = await Expense.find();
      res.status(200).json(expenses);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching expenses' });
    }
  },

  // Get an expense by ID
  getExpenseById: async (req: Request, res: Response) => {
    try {
      const expense = await Expense.findById(req.params.id);
      if (!expense) {
        return res.status(404).json({ message: 'Expense not found' });
      }
      res.status(200).json(expense);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching the expense' });
    }
  },

  // Update an expense by ID
  updateExpense: async (req: Request, res: Response) => {
    try {
      const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!expense) {
        return res.status(404).json({ message: 'Expense not found' });
      }
      res.status(200).json({ message: 'Expense updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error updating the expense' });
    }
  },

  // Delete an expense by ID
  deleteExpense: async (req: Request, res: Response) => {
    try {
      const expense = await Expense.findByIdAndDelete(req.params.id);
      if (!expense) {
        return res.status(404).json({ message: 'Expense not found' });
      }
      res.status(200).json({ message: 'Expense deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error deleting the expense' });
    }
  },
};

export default expensesController;
