import { useContext } from "react";
import { CartContext } from "../../../contexts/Cart";

import Button from "../../UI/Button";
import { SpanTotal, TotalPrice, Wrapper } from "./styles";

const Total = () => {
  const { total } = useContext(CartContext);

  return (
    <Wrapper>
      <SpanTotal>Total</SpanTotal>
      <TotalPrice>{`$${total.toFixed(2)}`}</TotalPrice>
      <Button theme="primary">Proceed to Checkout</Button>
    </Wrapper>
  );
};

export default Total;
