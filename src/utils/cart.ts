import { ICartItem } from "../types";

const incrementOrDecrement = (n: number, o: "inc" | "dec") => {
  return o === "inc" ? ++n : --n;
};

export const computeAmount = (
  arr: ICartItem[],
  id: string,
  op: "inc" | "dec"
) => {
  return arr.map((e) => {
    if (e.id === id) {
      return {
        ...e,
        amount: incrementOrDecrement(e.amount, op),
      };
    }

    return e;
  });
};
