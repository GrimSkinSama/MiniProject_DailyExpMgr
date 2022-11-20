// export interface Money {
//     id: number;
//     category_id:number;
//     amount: number;
//     description: string;
//     date: string;
// }

export interface Money {
  id: number;
  category:string;
  amount: number;
  description: string;
  date: string;
}

export class MoneyModel {
    constructor(
      public category_id:number,
      public amount: number,
      public description: string,
      public date: string
    ){ }
}

export interface Category{
  id: number;
  category_name: string;
}

export interface Total{
  total:number;
}


export class CategoryModel {
  constructor(
    public category_name: string
  ){}
}