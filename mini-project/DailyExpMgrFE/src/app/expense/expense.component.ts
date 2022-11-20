import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Category, Money, MoneyModel } from 'src/model/money';
import { ExpenseService } from '../service/expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  moneys: Money[] = [];
  money: Money | undefined;
  moneyFormGroup: FormGroup;
  catFormGroup: FormGroup;
  idParams: number = 0;

  expCat: Category[] = [];

  constructor(
    private expenseServices: ExpenseService,
    private router: Router,
    private formBuilder: FormBuilder) 
    {
      this.moneyFormGroup = this.formBuilder.group({
        date: new FormControl(''),
        category_id: new FormControl(''),
        amount: new FormControl(0),
        description: new FormControl('')
      });

      this.catFormGroup = this.formBuilder.group({
        category_name: new FormControl('')
      });
  }

  moneyModel = new MoneyModel(0,0,'','');
  submitted = false;

  ngOnInit(): void {
    this.submitted=false;
    this.getCategories();
  }

  onSubmit(){
    this.submitted = true;
    this.addExpense();
  }

  addExpense(
    date: string = this.moneyFormGroup.get('date')?.value,
    category_id: number = this.moneyFormGroup.get('category_id')?.value,
    amount: number = this.moneyFormGroup.get('amount')?.value,
    description: string = this.moneyFormGroup.get('description')?.value
    ): void{
      console.log(this.moneyFormGroup.value);
      
      //category = category.trim();
      //description = description.trim();

      this.expenseServices.addExpense(
        {
          id: this.idParams,
          ...this.moneyFormGroup.value
        } as Money)
      .subscribe(a => {this.moneys.push(a)})

      alert ("Your Expense has been Successfully Inputted !")

      this.router.navigate(["dashboard"]);
  }

  getCategories(): void{
    this.expenseServices.getExpenseCategories().subscribe(a => this.expCat = a);
  }

  submitCategory(){
    this.submitted = true;
    this.addExpenseCategory();
  }

  addExpenseCategory(category_name: string = this.catFormGroup.get('category_name')?.value): void{
      console.log(this.catFormGroup.value);
      this.expenseServices.addExpenseCategory(
        {
          id: this.idParams,
          ...this.catFormGroup.value
        } as Category)
      .subscribe(a => {this.expCat.push(a)})

      alert ("Your Expense Category has been Successfully Inputted !");
      this.router.navigate(["dashboard"]);
  }


}
