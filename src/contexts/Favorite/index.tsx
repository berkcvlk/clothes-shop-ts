import { createContext, useContext, useState } from "react";

import { IProduct } from "../../types";
import { ProductContext } from "../Product";
import { INITIAL_STATE } from "./initial";

// Contains
// items: IProduct[] - list of products
// add - add item by id
// remove - remove item by id
// isFavorite - check if the item is in the list
export const FavoriteContext = createContext(INITIAL_STATE);

const Provider: React.FC = ({ children }) => {
  const [favoriteList, setFavoriteList] = useState<IProduct[]>([]);

  // Use product context to get item
  // There can be no reason to store favorite
  // list. ID's can do the same thing.
  // This can change, later...
  const { items } = useContext(ProductContext);

  const onAddHandler = (id: string) => {
    const item = items.find((e) => e.id === id);
    const itemFav = favoriteList.find((e) => e.id === id);
    if (!item || itemFav) return;

    setFavoriteList((prev) => [...prev, item!]);
  };

  const onRemoveHandler = (id: string) => {
    const item = favoriteList.find((e) => e.id === id);
    if (!item) return;

    setFavoriteList((prev) => prev.filter((e) => e.id !== id));
  };

  const onIsFavorite = (id: string) => {
    const item = favoriteList.findIndex((e) => e.id === id);
    return !(item === -1);
  };

  return (
    <FavoriteContext.Provider
      value={{
        items: favoriteList,
        add: onAddHandler,
        remove: onRemoveHandler,
        isFavorite: onIsFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default Provider;
