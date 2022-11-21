import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, CategoryModel } from 'src/model/money';
import { IncomeService } from '../service/income.service';

@Component({
  selector: 'app-update-categories-income',
  templateUrl: './update-categories-income.component.html',
  styleUrls: ['./update-categories-income.component.css']
})
export class UpdateCategoriesIncomeComponent implements OnInit {
  categories: Category[] = [];
  category: Category | undefined;
  formGroup: FormGroup;
  idParams: number = 0;
  submitted = false;

  constructor(
    private incomeServices: IncomeService,
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
    this.getIncomeCategory();
  }

  onSubmit(){
    this.submitted = true;
    this.updateIncomeCategory();
  }

  getIncomeCategory(): void{
    this.idParams = Number(this.route.snapshot.paramMap.get('id'));
    this.incomeServices.getIncomeCategory(this.idParams).subscribe(income => {
      this.formGroup.get('category_name')?.setValue(income.category_name);
      this.model = income;
    });
  }

  updateIncomeCategory(
    category_name: string = this.formGroup.get('category_name')?.value
    ): void{
      category_name = category_name.trim();

      this.incomeServices.updateIncomeCategory(
        {
          id: this.idParams,
          ...this.formGroup.value
        } as Category)
      .subscribe(a => {this.categories.push(a)})

      alert ("Income Category has been Successfully Updated !")

      this.router.navigate(["list-categories"]);
  }

  canceled():void{
    alert("No changes has been made.")
  }

}
