import { useParams } from "react-router";
import { useContext } from "react";

import { ProductContext } from "../../../contexts/Product";

import Modal from "../../UI/Modal";
import FavoriteButton from "../../UI/Button/FavoriteButton/FavoriteButton";
import CartButton from "../../UI/Button/CartButton/CartButton";
import * as s from "./styles";

import { images } from "../../../utils/image";

const QuickView = () => {
  const { id } = useParams<{ id: string }>();
  const { getById } = useContext(ProductContext);

  // Item to render on quickview
  const { title, price, description } = getById(id);

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
            <CartButton item={{ id, title, price }} />
            <FavoriteButton id={id} />
          </s.ButtonWrapper>
        </s.Detail>
      </s.Wrapper>
    </Modal>
  );
};

export default QuickView;
