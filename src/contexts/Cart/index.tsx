import { createContext, useCallback, useEffect, useState } from "react";

import { ICartItem, IStage } from "../../types";
import { INITIAL_STATE } from "./initial";

import { computeAmount } from "../../utils/cart";

// Contains
// items: ICartItem - list of cart
// total: total price of items
// add: add item to cart
// remove: remove item from cart
export const CartContext = createContext(INITIAL_STATE);

const Provider: React.FC = ({ children }) => {
  const [items, setItems] = useState<ICartItem[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [stage, setStage] = useState<IStage>("initial");

  const onAdd = (i: ICartItem) => {
    const item = items.find((e) => e.id === i.id);

    if (!item) {
      setItems((prev) => [...prev, i]);
      setStage("added");
      return;
    }

    setItems(computeAmount(items, i.id, "inc"));
    setStage("added");
  };

  const onRemove = (id: string) => {
    const item = items.find((e) => e.id === id);

    if (!item) {
      return;
    }

    if (item.amount === 1) {
      setItems(items.filter((e) => e.id !== id));
      return;
    }

    setItems(computeAmount(items, id, "dec"));
  };

  const calculateTotal = useCallback(() => {
    return items.reduce((t, c) => t + c.amount * c.price, 0);
  }, [items]);

  // Recalculate total price on every items list changed
  useEffect(() => setTotal(calculateTotal()), [calculateTotal]);

  // Set a timer to reset added stage
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
        items,
        total,
        stage,
        add: onAdd,
        remove: onRemove,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default Provider;
