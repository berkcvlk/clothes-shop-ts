import Amount from "./Amount";
import {
  Subtotal,
  Detail,
  DetailBody,
  DetailImage,
  DetailPrice,
  DetailTitle,
  Grid,
} from "./styles";

const CartListItem = () => {
  return (
    <Grid>
      <Detail>
        <DetailImage src="/assets/images/products/120/1001.png" />
        <DetailBody>
          <DetailTitle>Contrast Print T-Shirt</DetailTitle>
          <DetailPrice>$69.99</DetailPrice>
        </DetailBody>
      </Detail>
      <Amount />
      <Subtotal>$69.99</Subtotal>
    </Grid>
  );
};

export default CartListItem;
