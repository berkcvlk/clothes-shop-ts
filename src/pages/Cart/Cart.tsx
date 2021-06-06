import Main from "../../layouts/Main";
import CartList from "../../components/Cart/CartList";
import Total from "../../components/Cart/Total";

import { CartListContainer, TotalContainer, Wrapper } from "./styles";

const Cart = () => {
  return (
    <Main title="Shopping Cart">
      <Wrapper>
        <CartListContainer>
          <CartList />
        </CartListContainer>
        <TotalContainer>
          <Total />
        </TotalContainer>
      </Wrapper>
    </Main>
  );
};

export default Cart;
