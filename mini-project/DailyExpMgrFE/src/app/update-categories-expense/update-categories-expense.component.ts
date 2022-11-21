import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, CategoryModel } from 'src/model/money';
import { ExpenseService } from '../service/expense.service';

@Component({
  selector: 'app-update-categories-expense',
  templateUrl: './update-categories-expense.component.html',
  styleUrls: ['./update-categories-expense.component.css']
})
export class UpdateCategoriesExpenseComponent implements OnInit {
  categories: Category[] = [];
  category: Category | undefined;
  formGroup: FormGroup;
  idParams: number = 0;
  submitted = false;

  constructor(
    private expenseServices: ExpenseService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { 
    this.formGroup = this.formBuilder.group({
      category_name: new FormControl('')
    });
  }

  model = new CategoryModel('');

  ngOnInit(): void {
    this.submitted=false;
    this.getExpenseCategory();
  }

  onSubmit(){
    this.submitted = true;
    this.updateExpenseCategory();
  }

  getExpenseCategory(): void{
    this.idParams = Number(this.route.snapshot.paramMap.get('id'));
    this.expenseServices.getExpenseCategory(this.idParams).subscribe(expense => {
      this.formGroup.get('category_name')?.setValue(expense.category_name);
      this.model = expense;
    });
  }

  updateExpenseCategory(
    category_name: string = this.formGroup.get('category_name')?.value
    ): void{
      category_name = category_name.trim();

      this.expenseServices.updateExpenseCategory(
        {
          id: this.idParams,
          ...this.formGroup.value
        } as Category)
      .subscribe(a => {this.categories.push(a)})

      alert ("Expense Category has been Successfully Updated !")

      this.router.navigate(["list-categories"]);
  }

  canceled():void{
    alert("No changes has been made.")
  }

}
