import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Money, MoneyModel } from 'src/model/money';
import { IncomeService } from '../service/income.service';

@Component({
  selector: 'app-update-income',
  templateUrl: './update-income.component.html',
  styleUrls: ['./update-income.component.css']
})
export class UpdateIncomeComponent implements OnInit {
  moneys: Money[] = [];
  money: Money | undefined;
  moneyFormGroup: FormGroup;
  idParams: number = 0;

  constructor(
    private incomeServices: IncomeService,
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
    this.getIncomes();
  }

  onSubmit(){
    this.submitted = true;
    this.updateIncome();
  }

  getIncomes(): void{
    this.idParams = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.idParams);
    this.incomeServices.getIncome(this.idParams).subscribe(income => {
      this.moneyFormGroup.get('date')?.setValue(income.date);
      this.moneyFormGroup.get('category_id')?.setValue(income.category_id);
      this.moneyFormGroup.get('amount')?.setValue(income.amount);
      this.moneyFormGroup.get('description')?.setValue(income.description);
      this.moneyModel = income;
    });
  }

  updateIncome(
    description: string = this.moneyFormGroup.get('description')?.value
    ): void{
      description = description.trim();

      this.incomeServices.updateIncome(
        {
          id: this.idParams,
          ...this.moneyFormGroup.value
        } as Money)
      .subscribe(a => {this.moneys.push(a)})

      alert ("Your Income has been Successfully Updated !")

      this.router.navigate(["dashboard"]);
  }

  canceled():void{
    alert("No changes has been made.")
  }
}
