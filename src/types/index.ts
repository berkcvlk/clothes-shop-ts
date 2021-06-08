export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
}

export interface IProductContext {
  items: IProduct[];
  getById: (id: string) => IProduct;
}

export interface IFavoriteContext {
  items: IProduct[];
  add: (id: string) => void;
  remove: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export interface ICartItem {
  id: string;
  title: string;
  price: number;
  amount: number;
}

export type IStage = "initial" | "adding" | "added";

export interface ICartContext {
  items: ICartItem[];
  total: number;
  stage: IStage;
  add: (i: ICartItem) => void;
  remove: (id: string) => void;
}
