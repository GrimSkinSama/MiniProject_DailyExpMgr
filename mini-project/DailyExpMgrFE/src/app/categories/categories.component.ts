import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/model/money';
import { ExpenseService } from '../service/expense.service';
import { IncomeService } from '../service/income.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  incomeCategories: Category[] = [];
  expenseCategories: Category[] = [];

  constructor(
    private incomeService: IncomeService,
    private expenseService: ExpenseService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getIncomeCategories();
    this.getExpenseCategories();
  }

  getIncomeCategories(){
    this.incomeService.getIncomeCategories().subscribe(a => this.incomeCategories = a)
  }

  getExpenseCategories(){
    this.expenseService.getExpenseCategories().subscribe(a => this.expenseCategories = a)
  }

  deleteIncomeCategory(id:number):void{
    for(let i=0;i<this.incomeCategories.length;i++){
      if(this.incomeCategories.at(i)?.id == id){
        alert("Cannot Be Deleted because it is used");
        this.router.navigate(['list-categories']);
        return;
      }
    }
    this.incomeService.deleteIncome(id).subscribe(() => {
      this.router.navigate(['dashboard']);
    });
    alert("Your Input Has been Succesfully Deleted")
  }

  deleteExpenseCategory(id:number):void{
    for(let i=0;i<this.expenseCategories.length;i++){
      if(this.expenseCategories.at(i)?.id == id){
        alert("Cannot Be Deleted because it is used");
        this.router.navigate(['list-categories']);
        return;
      }
    }
    this.expenseService.deleteExpense(id).subscribe(() => {
      this.router.navigate(['../dashboard']);
    });
    alert("Your Input Has been Succesfully Deleted")
  }

}
