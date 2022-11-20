import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Money,Category, Total } from 'src/model/money';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  private urlGetIncome: string = 'http://localhost:8080/income/incomes';
  private urlGetIncomeByID: string = 'http://localhost:8080/income/income';
  private urlGetIncomeCategory: string = 'http://localhost:8080/incomeCategory/incomeCategories';
  private urlGetIncomeCategoryByID: string = 'http://localhost:8080/incomeCategory/incomeCategory';
  private urlAddIncome: string = 'http://localhost:8080/income/addIncome';
  private urlUpdateIncome: string = 'http://localhost:8080/income/updateIncome';
  private urlDeleteIncome: string = 'http://localhost:8080/income/deleteIncome';
  private urlGetTotalIncome: string = 'http://localhost:8080/income/totalIncome';

  private urlAddIncomeCategory: string = 'http://localhost:8080/incomeCategory/addIncomeCategory';

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

  getIncomeCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.urlGetIncomeCategory);
  }

  getIncomeCategory(id:number): Observable<Category>{
    const urlByID = `${this.urlGetIncomeCategoryByID}/${id}`
    return this.http.get<Category>(urlByID);
  }

  getTotalIncome(): Observable<Total>{
    return this.http.get<Total>(this.urlGetTotalIncome);
  }

  addIncome(money:Money): Observable<Money>{
    return this.http.post<Money>(this.urlAddIncome, money, this.httpOptions);
  }

  updateIncome(money:Money): Observable<Money>{
    return this.http.put<Money>(`${this.urlUpdateIncome}/${money.id}`, money, this.httpOptions);
  }

  deleteIncome(id:Number): Observable<Money>{
    return this.http.delete<Money>(`${this.urlDeleteIncome}/${id}`, this.httpOptions);
  }



  addIncomeCategory(category: Category): Observable<Category>{
    return this.http.post<Category>(this.urlAddIncomeCategory, category, this.httpOptions);
  }
}
