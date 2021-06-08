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
  const { add, stage } = useContext(CartContext);

  const onAddItem = () => {
    add({
      id: id,
      title: title,
      price: price,
      amount: 1,
    });
  };

  // According to stage which can be only
  // "added" and "initial", change button text
  // and color. This can be changed, later.
  // *style with inline can be changed, too.
  const buttonRender =
    stage === "initial" ? (
      <Button onClick={onAddItem} theme="primary">
        Add to Cart
      </Button>
    ) : (
      <Button style={{ backgroundColor: "#76C893", color: "white" }}>
        Added
      </Button>
    );

  return buttonRender;
};

export default CartButton;
