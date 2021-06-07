import { IProductContext } from "../../types";

export const INITIAL_STATE: IProductContext = {
  items: [],
  getById: (id) => ({ id, title: "", description: "", price: 0 }),
};
