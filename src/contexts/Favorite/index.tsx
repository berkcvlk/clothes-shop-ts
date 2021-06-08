import { createContext, useContext, useState } from "react";

import { ProductContext } from "../Product";
import { IProduct } from "../../types";
import { INITIAL_STATE } from "./initial";

// Contains
// items: IProduct[] - list of products
// add - add item by id
// remove - remove item by id
// isFavorite - check if the item is in the list
export const FavoriteContext = createContext(INITIAL_STATE);

const Provider: React.FC = ({ children }) => {
  const [items, setItems] = useState<IProduct[]>([]);

  // Use product context to get item
  // There can be no reason to store favorite
  // list. ID's can do the same thing.
  // This can change, later...
  const { items: products } = useContext(ProductContext);

  const onAdd = (id: string) => {
    const product = products.find((e) => e.id === id);
    const item = items.find((e) => e.id === id);
    if (!product || item) return;

    // Add product that get from product list
    setItems((prev) => [...prev, product]);
  };

  const onRemove = (id: string) => {
    const item = items.find((e) => e.id === id);
    if (!item) return;

    setItems((prev) => prev.filter((e) => e.id !== id));
  };

  // Check if the item on the favorite list or not
  const onIsFavorite = (id: string) => {
    const index = items.findIndex((e) => e.id === id);
    return !(index === -1);
  };

  return (
    <FavoriteContext.Provider
      value={{
        items,
        add: onAdd,
        remove: onRemove,
        isFavorite: onIsFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default Provider;
