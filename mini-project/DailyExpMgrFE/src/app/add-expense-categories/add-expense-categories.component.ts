import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/model/money';
import { ExpenseService } from '../service/expense.service';

@Component({
  selector: 'app-add-expense-categories',
  templateUrl: './add-expense-categories.component.html',
  styleUrls: ['./add-expense-categories.component.css']
})
export class AddExpenseCategoriesComponent implements OnInit {

  categories: Category[] = [];
  category: Category | undefined;
  formGroup: FormGroup;
  idParams: number = 0;

  expCat: Category[] = [];

  constructor(
    private expenseServices: ExpenseService,
    private router: Router,
    private formBuilder: FormBuilder) 
    {
      this.formGroup = this.formBuilder.group({
        category_name: new FormControl('')
      });
  }

  submitted = false;

  ngOnInit(): void {
    this.submitted=false;
    this.getCategories();
  }

  onSubmit(){
    this.submitted = true;
    this.addExpenseCategory();
  }

  addExpenseCategory(
    ): void{
      console.log(this.formGroup.value);

      this.expenseServices.addExpenseCategory(
        {
          id: this.idParams,
          ...this.formGroup.value
        } as Category)
      .subscribe(a => {this.categories.push(a)})

      alert ("Your Expense Category has been Successfully Inputted !")

      this.router.navigate(["list-categories"]);
  }

  getCategories(): void{
    this.expenseServices.getExpenseCategories().subscribe(a => this.expCat = a);
  }

}
