import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Money } from 'src/model/money';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private urlGetExpense: string = 'http://localhost:8080/expense/expenses';
  private urlGetExpenseByID: string = 'http://localhost:8080/expense/expense';
  private urlGetExpenseCategory: string = 'http://localhost:8080/expenseCategory/expenseCategories';
  private urlAddExpense: string = 'http://localhost:8080/expense/addExpense';
  private urlUpdateExpense: string = 'http://localhost:8080/expense/updateExpense';
  private urlDeleteExpense: string = 'http://localhost:8080/expense/deleteExpense';

  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({'Content-type':'application/json'})
  }

  getExpenses():Observable<Money[]>{
    return this.http.get<Money[]>(this.urlGetExpense);
  }

  getExpense(id:number): Observable<Money>{
    const urlByID = `${this.urlGetExpenseByID}/${id}`
    return this.http.get<Money>(urlByID);
  }

  addExpense(money:Money): Observable<Money>{
    return this.http.post<Money>(this.urlAddExpense, money, this.httpOptions);
  }

  updateExpense(money:Money): Observable<Money>{
    return this.http.put<Money>(`${this.urlUpdateExpense}/${money.id}`, money, this.httpOptions)
  }

  deleteExpense(id:Number): Observable<Money>{
    return this.http.delete<Money>(`${this.urlDeleteExpense}/${id}`, this.httpOptions)
  }
}
