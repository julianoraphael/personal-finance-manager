// src/app.ts
import express from 'express';
import expensesRouter from './routes/expenses.routes';
import './db/mongoose'; // Import the MongoDB connection file
import cors from 'cors'; // Importe o pacote cors


const app = express();
const port = 3000;
app.use(cors({
    origin: 'http://localhost:4200'
  }));

app.use(express.json());

// Main route
app.get('/', (req, res) => {
  res.send('Hello, Personal Finance Manager!');
});

// Expenses routes
app.use(expensesRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
