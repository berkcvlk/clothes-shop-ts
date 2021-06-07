import { useContext } from "react";
import { CartContext } from "../../../contexts/Cart";

import CartListItem from "./CartListItem";
import TableHeaders from "./Table/TableHeaders";

const CartList = () => {
  const { items } = useContext(CartContext);

  return (
    <>
      <TableHeaders />
      {items.map((item, i) => (
        <CartListItem item={item} key={i} />
      ))}
    </>
  );
};
export default CartList;
