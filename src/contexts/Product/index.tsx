import React, { createContext, useEffect, useState } from "react";
import { fetchProducts } from "../../api/product";

import { IProduct } from "../../types";
import { INITIAL_STATE } from "./initial";

// Contains
// items: IProduct[] - list of products
// getById: to get item by id
export const ProductContext = createContext(INITIAL_STATE);

const Provider: React.FC = ({ children }) => {
  const [productList, setProductList] = useState<IProduct[]>([]);

  // Get product list from "dummy.json"
  // on first load of the application
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchProducts();
        setProductList(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const getItemById = (id: string) => {
    const [item] = productList.filter((e) => e.id === id);
    return item;
  };

  return (
    <ProductContext.Provider
      value={{ items: productList, getById: getItemById }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default Provider;
