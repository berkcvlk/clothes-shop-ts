import { useParams } from "react-router";
import { useContext } from "react";

import { CartContext } from "../../../contexts/Cart";
import { ProductContext } from "../../../contexts/Product";

import Button from "../../UI/Button";
import Modal from "../../UI/Modal";
import * as s from "./styles";

import { images } from "../../../utils/image";
import FavoriteButton from "../../UI/Button/FavoriteButton/FavoriteButton";

const QuickView = () => {
  const { id } = useParams<{ id: string }>();
  const { getById } = useContext(ProductContext);

  // Item to render on quickview
  const { title, price, description } = getById(id);

  // To add item to the cart list
  const { add: addCartItem } = useContext(CartContext);

  const onAddCartItem = () => {
    addCartItem({
      id: id,
      title: title,
      price: price,
      amount: 1,
    });
  };

  return (
    <Modal>
      <s.Wrapper>
        <s.ImageContainer>
          <s.Image src={images(id, "320")} alt={title} />
        </s.ImageContainer>
        <s.Detail>
          <s.Title>{title}</s.Title>
          <s.Description>{description}</s.Description>
          <s.Price>{`$${price}`}</s.Price>
          <s.ButtonWrapper>
            <Button theme="primary" onClick={onAddCartItem}>
              Add to Cart
            </Button>
            <FavoriteButton id={id} />
          </s.ButtonWrapper>
        </s.Detail>
      </s.Wrapper>
    </Modal>
  );
};

export default QuickView;
