import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Money, MoneyModel } from 'src/model/money';
import { IncomeService } from '../service/income.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
  moneys: Money[] = [];
  money: Money | undefined;
  moneyFormGroup: FormGroup;
  idParams: number = 0;

  constructor(
    private incomeServices: IncomeService,
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
    this.addIncome();
  }

  addIncome(
    date: string = this.moneyFormGroup.get('date')?.value,
    category_id: number = this.moneyFormGroup.get('category_id')?.value,
    amount: number = this.moneyFormGroup.get('amount')?.value,
    description: string = this.moneyFormGroup.get('description')?.value
    ): void{
      console.log(this.moneyFormGroup.value);
      
      //category = category.trim();
      description = description.trim();

      this.incomeServices.addIncome(
        {
          id: this.idParams,
          ...this.moneyFormGroup.value
        } as Money)
      .subscribe(a => {this.moneys.push(a)})

      alert ("Your Income has been Successfully Inputted !")

      this.router.navigate(["dashboard"]);
  }

}
