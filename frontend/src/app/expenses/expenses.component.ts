import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Expense {
  _id: string;
  description: string;
  amount: number;
}

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  expenses: Expense[] = [];
  totalExpenses = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchExpenses();
  }

  fetchExpenses(): void {
    this.http.get<Expense[]>('http://localhost:3000/expenses')
      .subscribe((data) => {
        this.expenses = data;
        this.calculateTotalExpenses();
      });
  }

  calculateTotalExpenses(): void {
    this.totalExpenses = this.expenses.reduce((total, expense) => total + expense.amount, 0);
  }
}
