import React, { createContext, useEffect, useState } from "react";

import { IProduct } from "../../types";
import { INITIAL_STATE } from "./initial";
import { fetchProducts } from "../../api/product";

// Contains
// items: IProduct[] - list of products
// getById: to get item by id
export const ProductContext = createContext(INITIAL_STATE);

const Provider: React.FC = ({ children }) => {
  const [items, setItems] = useState<IProduct[]>([]);

  // Get product list from "mockapi"
  // on first load of the application
  useEffect(() => {
    (async () => {
      const data = await fetchProducts();
      setItems(data);
    })();
  }, []);

  const getItemById = (id: string) => {
    const [item] = items.filter((e) => e.id === id);
    return item;
  };

  return (
    <ProductContext.Provider value={{ items: items, getById: getItemById }}>
      {children}
    </ProductContext.Provider>
  );
};

export default Provider;
