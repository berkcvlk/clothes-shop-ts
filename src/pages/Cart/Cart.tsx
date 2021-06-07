import { useContext } from "react";
import { CartContext } from "../../contexts/Cart";

import Main from "../../layouts/Main";
import CartList from "../../components/Cart/CartList";
import Total from "../../components/Cart/Total";
import NoItem from "../NoItem";

import { CartListContainer, TotalContainer, Wrapper } from "./styles";

const Cart = () => {
  const { items, total } = useContext(CartContext);

  // If there is no item on the cart
  // render the error page
  const noitem = !items.length && <NoItem />;

  return (
    <Main title="Shopping Cart">
      {noitem || (
        <Wrapper>
          <CartListContainer>
            <CartList list={items} />
          </CartListContainer>
          <TotalContainer>
            <Total total={total} />
          </TotalContainer>
        </Wrapper>
      )}
    </Main>
  );
};

export default Cart;
