import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExpenseCategoriesComponent } from './add-expense-categories/add-expense-categories.component';
import { AddIncomeCategoriesComponent } from './add-income-categories/add-income-categories.component';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpenseComponent } from './expense/expense.component';
import { IncomeComponent } from './income/income.component';
import { LoginComponent } from './login/login.component';
import { UpdateCategoriesExpenseComponent } from './update-categories-expense/update-categories-expense.component';
import { UpdateCategoriesIncomeComponent } from './update-categories-income/update-categories-income.component';
import { UpdateExpenseComponent } from './update-expense/update-expense.component';
import { UpdateIncomeComponent } from './update-income/update-income.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'add-income', component: IncomeComponent},
  {path: 'add-expense', component: ExpenseComponent},
  {path: 'edit-income/:id', component: UpdateIncomeComponent},
  {path: 'edit-expense/:id', component: UpdateExpenseComponent},
  {path: 'list-categories', component: CategoriesComponent},
  {path: 'edit-income-category/:id', component: UpdateCategoriesIncomeComponent},
  {path: 'edit-expense-category/:id', component: UpdateCategoriesExpenseComponent},
  {path: 'add-income-category', component: AddIncomeCategoriesComponent},
  {path: 'add-expense-category', component: AddExpenseCategoriesComponent},
  {path: '',redirectTo: '/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
