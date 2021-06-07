import { IFavoriteContext } from "../../types";

export const INITIAL_STATE: IFavoriteContext = {
  items: [],
  add: (id) => {},
  remove: (id) => {},
  isFavorite: (id) => false,
};
