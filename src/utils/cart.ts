import { ICartItem } from "../types";

export const incrementAmount = (arr: ICartItem[], id: string): ICartItem[] => {
  return arr.map((e) => {
    if (e.id === id) {
      return {
        ...e,
        amount: e.amount + 1,
      };
    }

    return e;
  });
};

export const decrementAmount = (arr: ICartItem[], id: string): ICartItem[] => {
  return arr.map((e) => {
    if (e.id === id) {
      return {
        ...e,
        amount: e.amount - 1,
      };
    }

    return e;
  });
};
