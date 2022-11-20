import { Component, OnInit } from '@angular/core';
import { Money } from 'src/model/money';
import { IncomeService } from '../service/income.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  moneys: Money[] = [];

  constructor(private incomeService: IncomeService) { }

  ngOnInit(): void {
    this.getIncomes();
  }

  getIncomes():void{
    this.incomeService.getIncomes().subscribe(a => this.moneys = a);
  }

  // getExpenses(): void{
    
  // }



}
