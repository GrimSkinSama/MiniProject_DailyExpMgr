import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/model/money';
import { IncomeService } from '../service/income.service';

@Component({
  selector: 'app-add-income-categories',
  templateUrl: './add-income-categories.component.html',
  styleUrls: ['./add-income-categories.component.css']
})
export class AddIncomeCategoriesComponent implements OnInit {

  categories: Category[] = [];
  category: Category | undefined;
  formGroup: FormGroup;
  idParams: number = 0;

  constructor(
    private incomeServices: IncomeService,
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
  }

  onSubmit(){
    this.submitted = true;
    this.addIncomeCategory();
  }

  addIncomeCategory(
    ): void{
      console.log(this.formGroup.value);

      this.incomeServices.addIncomeCategory(
        {
          id: this.idParams,
          ...this.formGroup.value
        } as Category)
      .subscribe(a => {this.categories.push(a)})

      alert ("Your Income Category has been Successfully Inputted !")

      this.router.navigate(["list-categories"]);
  }
}
