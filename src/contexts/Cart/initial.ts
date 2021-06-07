import { ICartContext } from "../../types";

export const INITIAL_STATE: ICartContext = {
  items: [],
  total: 0,
  add: () => {},
  remove: () => {},
};