import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Money, MoneyModel } from 'src/model/money';
import { ExpenseService } from '../service/expense.service';

@Component({
  selector: 'app-update-expense',
  templateUrl: './update-expense.component.html',
  styleUrls: ['./update-expense.component.css']
})
export class UpdateExpenseComponent implements OnInit {

  moneys: Money[] = [];
  money: Money | undefined;
  moneyFormGroup: FormGroup;
  idParams: number = 0;

  constructor(
    private expenseServices: ExpenseService,
    private route: ActivatedRoute,
    private router: Router,
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
    this.updateExpense();
  }

  getExpenses(): void{
    this.idParams = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.idParams);
    this.expenseServices.getExpense(this.idParams).subscribe(expense => {
      this.moneyFormGroup.get('date')?.setValue(expense.date);
      this.moneyFormGroup.get('category_id')?.setValue(expense.category_id);
      this.moneyFormGroup.get('amount')?.setValue(expense.amount);
      this.moneyFormGroup.get('description')?.setValue(expense.description);
      this.money = expense;
    });
  }

  updateExpense(
    date: string = this.moneyFormGroup.get('date')?.value,
    category_id: number = this.moneyFormGroup.get('category_id')?.value,
    amount: string = this.moneyFormGroup.get('amount')?.value,
    description: string = this.moneyFormGroup.get('description')?.value
    ): void{
      description = description.trim();

      this.expenseServices.updateExpense(
        {
          id: this.idParams,
          ...this.moneyFormGroup.value
        } as Money)
      .subscribe(a => {this.moneys.push(a)})

      alert ("Your Expense has been Successfully Updated !")

      this.router.navigate(["dashboard"]);
  }

}
