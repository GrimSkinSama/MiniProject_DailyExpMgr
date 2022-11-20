export interface Money {
    id: number;
    income_category_id:number;
    amount: number;
    description: string;
    income_date: string;
}

export class MoneyModel {
    constructor(
      public income_category_id:number,
      public amount: number,
      public description: string,
      public income_date: string,
    ){ }
}