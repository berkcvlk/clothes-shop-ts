export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: string;
}

export interface IProductContext {
  items: IProduct[],  
}