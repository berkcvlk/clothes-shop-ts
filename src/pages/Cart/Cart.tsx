import styled from "styled-components";

import Main from "../../layouts/Main";

const Cart = () => {
  return (
    <Main title="Shopping Cart">
      <Wrapper>
        <CartListContainer />
        <TotalContainer />
      </Wrapper>
    </Main>
  );
};

const Wrapper = styled.div`
  display: flex;

  height: 200px;
`;

const CartListContainer = styled.div`
  flex: 75%;
`;

const TotalContainer = styled.div`
  flex: 25%;
`;

export default Cart;
