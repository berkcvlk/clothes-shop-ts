import { createContext, useCallback, useEffect, useState } from "react";

import { ICartItem, IStage } from "../../types";
import { INITIAL_STATE } from "./initial";

import { incrementAmount, decrementAmount } from "../../utils/cart";

// Contains
// items: ICartItem - list of cart
// total: total price of items
// add: add item to cart
// remove: remove item from cart
export const CartContext = createContext(INITIAL_STATE);

const Provider: React.FC = ({ children }) => {
  const [cartList, setCartList] = useState<ICartItem[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [stage, setStage] = useState<IStage>("initial");

  const onAddHandler = (i: ICartItem) => {
    const item = cartList.find((e) => e.id === i.id);

    if (!item) {
      setCartList((prev) => [...prev, i]);
      setStage("added");
      return;
    }

    setCartList(incrementAmount(cartList, i.id));
    setStage("added");
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

    setCartList(decrementAmount(cartList, id));
  };

  const calculateTotal = useCallback(() => {
    return cartList.reduce((t, c) => t + c.amount * c.price, 0);
  }, [cartList]);

  useEffect(() => setTotal(calculateTotal()), [calculateTotal]);
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (stage === "added") {
      timer = setTimeout(() => setStage("initial"), 550);
    }

    return () => clearTimeout(timer);
  }, [stage]);

  return (
    <CartContext.Provider
      value={{
        items: cartList,
        total: total,
        stage: stage,
        add: onAddHandler,
        remove: onRemoveHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default Provider;
