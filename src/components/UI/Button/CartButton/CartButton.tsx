import { FC, useContext } from "react";
import { CartContext } from "../../../../contexts/Cart";

import Button from "../Button";

interface Props {
  item: {
    id: string;
    title: string;
    price: number;
  };
}

const CartButton: FC<Props> = ({ item: { id, title, price } }) => {
  // To add item to the cart list
  const { add } = useContext(CartContext);

  const onAddItem = () => {
    add({
      id: id,
      title: title,
      price: price,
      amount: 1,
    });
  };

  return (
    <Button onClick={onAddItem} theme="primary">
      Add to Cart
    </Button>
  );
};

export default CartButton;
