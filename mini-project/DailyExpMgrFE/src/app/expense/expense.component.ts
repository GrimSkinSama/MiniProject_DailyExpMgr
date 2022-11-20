import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Money, MoneyModel } from 'src/model/money';
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
  idParams: number = 0;

  constructor(
    private expenseServices: ExpenseService,
    private formBuilder: FormBuilder) 
    {
      this.moneyFormGroup = this.formBuilder.group({
        date: new FormControl(''),
        category_id: new FormControl(''),
        amount: new FormControl(0),
        description: new FormControl('')
      });
  }

  moneyModel = new MoneyModel(0,0,'','');
  submitted = false;

  ngOnInit(): void {
    this.submitted=false;
  }

  onSubmit(){
    this.submitted = true;
    this.addExpense();
  }

  addExpense(
    date: string = this.moneyFormGroup.get('date')?.value,
    category_id: number = this.moneyFormGroup.get('category_id')?.value,
    amount: string = this.moneyFormGroup.get('amount')?.value,
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
  }

}
