import { createContext, useCallback, useEffect, useState } from "react";
import { ICartItem } from "../../types";
import { INITIAL_STATE } from "./initial";

// Contains
// items: ICartItem - list of cart
// total: total price of items
// add: add item to cart
// remove: remove item from cart
export const CartContext = createContext(INITIAL_STATE);

const Provider: React.FC = ({ children }) => {
  const [cartList, setCartList] = useState<ICartItem[]>([]);
  const [total, setTotal] = useState<number>(0);

  const onAddHandler = (i: ICartItem) => {
    const hasItem = cartList.some((e) => e.id === i.id);

    if (!hasItem) {
      setCartList((prev) => [...prev, i]);
      return;
    }

    const list = cartList.map((e) => {
      if (e.id === i.id) {
        return {
          ...e,
          amount: e.amount + 1,
        };
      }

      return e;
    });

    setCartList(list);
  };

  const onRemoveHandler = (id: string) => {
    const item = cartList.find((e) => e.id === id);

    if (!item) {
      return;
    }

    if (item.amount === 1) {
      setCartList(cartList.filter((e) => e.id !== id));
      return;
    }

    setCartList(
      cartList.map((e) => {
        if (e.id === id) {
          return {
            ...e,
            amount: e.amount - 1,
          };
        }

        return e;
      })
    );
  };

  const onCalculateTotal = useCallback(() => {
    return cartList.reduce((t, c) => t + c.amount * c.price, 0);
  }, [cartList]);

  useEffect(() => setTotal(onCalculateTotal()), [cartList, onCalculateTotal]);

  return (
    <CartContext.Provider
      value={{
        items: cartList,
        total: total,
        add: onAddHandler,
        remove: onRemoveHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default Provider;
