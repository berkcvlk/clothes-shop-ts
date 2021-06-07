import { ICartItem } from "../../../../types";
import { images } from "../../../../utils/image";
import { card } from "../../../../motion/variants";

import Amount from "./Amount";
import * as s from "./styles";

interface Props {
  item: ICartItem;
}

const CartListItem: React.FC<Props> = ({ item }) => {
  return (
    <s.Grid variants={card}>
      <s.Detail>
        <s.DetailImage src={images(item.id, "120")} />
        <s.DetailBody>
          <s.DetailTitle>{item.title}</s.DetailTitle>
          <s.DetailPrice>{item.price}</s.DetailPrice>
        </s.DetailBody>
      </s.Detail>
      <Amount item={item} />
      <s.Subtotal>{`$${(item.price * item.amount).toFixed(2)}`}</s.Subtotal>
    </s.Grid>
  );
};

export default CartListItem;
