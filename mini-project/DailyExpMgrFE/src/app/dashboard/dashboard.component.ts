import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category, Money } from 'src/model/money';
import { ExpenseService } from '../service/expense.service';
import { IncomeService } from '../service/income.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // moneys: Money[] = [];
  // moneyModel: MoneyModel | undefined;
  // isIncome: string = '';
  incomes: Money[] = [];
  expenses: Money[]= [];

  categories: Category[] = [];

  constructor(
    private incomeService: IncomeService,
    private expenseService: ExpenseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getIncomes();
    this.getExpenses();
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
      this.router.navigate(['dashboard']);
    });
    alert("Your Input Has been Succesfully Deleted")
  }

  



}
