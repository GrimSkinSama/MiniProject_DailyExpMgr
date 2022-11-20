import { Component, OnInit } from '@angular/core';
import { Form,FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
    private formBuilder: FormBuilder) 
    {
      this.moneyFormGroup = this.formBuilder.group({
        date: new FormControl(''),
        category: new FormControl(''),
        amount: new FormControl(0),
        notes: new FormControl('')
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
    category: string = this.moneyFormGroup.get('category')?.value,
    amount: string = this.moneyFormGroup.get('amount')?.value,
    notes: string = this.moneyFormGroup.get('notes')?.value
    ): void{
      console.log(this.moneyFormGroup.value);
      
      category = category.trim();
      notes = notes.trim();

      this.incomeServices.addIncome(
        {
          id: this.idParams,
          ...this.moneyFormGroup.value
        } as Money)
      .subscribe(a => {this.moneys.push(a)})
  }

}
