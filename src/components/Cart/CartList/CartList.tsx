import CartListItem from "./CartListItem";
import TableHeaders from "./Table/TableHeaders";

import { ICartItem } from "../../../types";
import { Wrapper } from "./styles";
import { products } from "../../../motion/variants";

interface Props {
  list: ICartItem[];
}

const CartList: React.FC<Props> = ({ list }) => {
  return (
    <Wrapper initial="hidden" animate="visible" variants={products}>
      <TableHeaders />
      {list.map((item, i) => (
        <CartListItem item={item} key={i} />
      ))}
    </Wrapper>
  );
};
export default CartList;
