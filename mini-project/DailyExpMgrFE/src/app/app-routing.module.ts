import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpenseComponent } from './expense/expense.component';
import { IncomeComponent } from './income/income.component';
import { LoginComponent } from './login/login.component';
import { UpdateExpenseComponent } from './update-expense/update-expense.component';
import { UpdateIncomeComponent } from './update-income/update-income.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'add-income', component: IncomeComponent},
  {path: 'add-expense', component: ExpenseComponent},
  {path: 'edit-income/:id', component: UpdateIncomeComponent},
  {path: 'edit-expense/:id', component: UpdateExpenseComponent},
  {path: '',redirectTo: '/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
