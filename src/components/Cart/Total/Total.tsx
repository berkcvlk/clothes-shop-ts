import Button from "../../UI/Button";
import { SpanTotal, TotalPrice, Wrapper } from "./styles";

const Total = () => {
  return (
    <Wrapper>
      <SpanTotal>Total</SpanTotal>
      <TotalPrice>$349.95</TotalPrice>
      <Button theme="primary">Proceed to Checkout</Button>
    </Wrapper>
  );
};

export default Total;
