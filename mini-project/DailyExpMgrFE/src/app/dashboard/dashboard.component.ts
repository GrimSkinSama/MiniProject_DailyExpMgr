import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category, Money, Total } from 'src/model/money';
import { ExpenseService } from '../service/expense.service';
import { IncomeService } from '../service/income.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  incomes: Money[] = [];
  expenses: Money[]= [];

  categories: Category[] = [];

  totalinc: Total | undefined;
  totalexp: Total | undefined;

  constructor(
    private incomeService: IncomeService,
    private expenseService: ExpenseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getIncomes();
    this.getExpenses();

    this.getTotalIncomes();
    this.getTotalExpenses();
  }

  getIncomes(): void{
    this.incomeService.getIncomes().subscribe(a => this.incomes = a);
  }

  getCategory(id:number):void{
    this.incomeService.getIncomeCategory(id).subscribe();
  }

  getExpenses(): void{
    this.expenseService.getExpenses().subscribe(a => this.expenses = a);
  }

  deleteIncome(id:number):void{
    this.incomeService.deleteIncome(id).subscribe(() => {
      this.router.navigate(['dashboard']);
    });
    alert("Your Input Has been Succesfully Deleted")
  }

  deleteExpense(id:number):void{
    this.expenseService.deleteExpense(id).subscribe(() => {
      this.router.navigate(['../dashboard']);
    });
    alert("Your Input Has been Succesfully Deleted")
  }


  getTotalIncomes(): void{
    this.incomeService.getTotalIncome().subscribe(a => this.totalinc = a);
  }
  
  getTotalExpenses(): void{
    this.expenseService.getTotalExpense().subscribe(a => this.totalexp = a);
  }
    
}




