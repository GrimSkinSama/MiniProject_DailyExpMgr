import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Money } from 'src/model/money';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  private urlGetIncome: string = 'http://localhost:8080/income/incomes';
  private urlGetIncomeByID: string = 'http://localhost:8080/income/income';
  private urlGetIncomeCategory: string = 'http://localhost:8080/incomeCategory/incomeCategories';
  private urlAddIncome: string = 'http://localhost:8080/income/addIncome';
  private urlUpdateIncome: string = 'http://localhost:8080/income/updateIncome';
  private urlDeleteIncome: string = 'http://localhost:8080/income/deleteIncome';

  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({'Content-type':'application/json'})
  }

  getIncomes():Observable<Money[]>{
    return this.http.get<Money[]>(this.urlGetIncome);
  }

  getIncome(id:number): Observable<Money>{
    const urlByID = `${this.urlGetIncomeByID}/${id}`
    return this.http.get<Money>(urlByID);
  }

  addIncome(money:Money): Observable<Money>{
    return this.http.post<Money>(this.urlAddIncome, money, this.httpOptions);
  }

  updateIncome(money:Money): Observable<Money>{
    return this.http.put<Money>(`${this.urlUpdateIncome}/${money.id}`, money, this.httpOptions)
  }

  deleteIncome(id:Number): Observable<Money>{
    return this.http.delete<Money>(`${this.urlDeleteIncome}/${id}`, this.httpOptions)
  }
}
