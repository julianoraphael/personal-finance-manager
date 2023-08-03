// src/routes/expenses.routes.ts
import { Router } from 'express';
import expensesController from '../controllers/expenses.controller';

const router = Router();

router.post('/expenses', expensesController.addExpense);
router.get('/expenses', expensesController.getAllExpenses);
router.get('/expenses/:id', expensesController.getExpenseById);
router.put('/expenses/:id', expensesController.updateExpense);
router.delete('/expenses/:id', expensesController.deleteExpense);

export default router;
