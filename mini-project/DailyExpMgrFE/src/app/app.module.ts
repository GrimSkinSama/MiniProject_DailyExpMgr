import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ExpenseComponent } from './expense/expense.component';
import { IncomeComponent } from './income/income.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateIncomeComponent } from './update-income/update-income.component';
import { UpdateExpenseComponent } from './update-expense/update-expense.component';
import { CurrencyPipe } from './pipe/currency.pipe';
import { UpdateCategoriesExpenseComponent } from './update-categories-expense/update-categories-expense.component';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { AddIncomeCategoriesComponent } from './add-income-categories/add-income-categories.component';
import { AddExpenseCategoriesComponent } from './add-expense-categories/add-expense-categories.component';
import { UpdateCategoriesIncomeComponent } from './update-categories-income/update-categories-income.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    IncomeComponent,
    ExpenseComponent,
    CategoriesComponent,
    UpdateIncomeComponent,
    UpdateExpenseComponent,
    CurrencyPipe,
    UpdateCategoriesIncomeComponent,
    UpdateCategoriesExpenseComponent,
    AddIncomeCategoriesComponent,
    AddExpenseCategoriesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
