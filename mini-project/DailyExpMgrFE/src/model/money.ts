export interface Money {
    id: number;
    category_id:number;
    amount: number;
    description: string;
    date: string;
}

export class MoneyModel {
    constructor(
      public category_id:number,
      public amount: number,
      public description: string,
      public date: string,
      public type: string
    ){ }
}

