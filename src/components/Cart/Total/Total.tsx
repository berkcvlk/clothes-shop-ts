import Button from "../../UI/Button";
import { SpanTotal, TotalPrice, Wrapper } from "./styles";

interface Props {
  total: number;
}

const Total: React.FC<Props> = ({ total }) => {
  return (
    <Wrapper>
      <SpanTotal>Total</SpanTotal>
      <TotalPrice>{`$${total.toFixed(2)}`}</TotalPrice>
      <Button theme="primary">Proceed to Checkout</Button>
    </Wrapper>
  );
};

export default Total;
