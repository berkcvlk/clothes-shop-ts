import CartListItem from "./CartListItem";
import TableHeaders from "./Table/TableHeaders";

const CartList = () => {
  return (
    <>
      <TableHeaders />
      {[...new Array(4)].map((e, i) => (
        <CartListItem key={i} />
      ))}
    </>
  );
};
export default CartList;
