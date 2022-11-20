import { Component, OnInit } from '@angular/core';
import { Money, MoneyModel } from 'src/model/money';
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


  constructor(private incomeService: IncomeService,
    private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.getIncomes();
    this.getExpenses();
  }

  getIncomes(): string{
    this.incomeService.getIncomes().subscribe(a => this.incomes = a);
    return 'incomes';
  }

  getExpenses(): string{
    this.expenseService.getExpenses().subscribe(a => this.expenses = a);
    return 'expense'

  }

  



}
