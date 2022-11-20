export interface Money {
    id: number;
    date: string;
    category: string;
    amount: number;
    notes: string
}

export class MoneyModel {
    constructor(
      public date: string,
      public category: string,
      public amount: number,
      public notes: string
    ){ }
}