import { useParams } from "react-router";
import { useContext } from "react";

import { FavoriteContext } from "../../../contexts/Favorite";
import { CartContext } from "../../../contexts/Cart";
import { ProductContext } from "../../../contexts/Product";

import Button from "../../UI/Button";
import Modal from "../../UI/Modal";
import * as s from "./styles";

import { images } from "../../../utils/image";

const QuickView = () => {
  const { id } = useParams<{ id: string }>();
  const { getById } = useContext(ProductContext);

  // Item to render on quickview
  const { title, price, description } = getById(id);

  // To manipulate favorite list, use this functions
  const {
    add: addFav,
    remove: removeFav,
    isFavorite,
  } = useContext(FavoriteContext);
  const fav = isFavorite(id);

  const onFavoriteAdd = () => {
    addFav(id);
  };

  const onFavoriteRemove = () => {
    removeFav(id);
  };

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

  const buttonSwitch = (
    <Button onClick={fav ? onFavoriteRemove : onFavoriteAdd}>
      {fav ? "Remove from Favorites" : "Add to Favorite"}
    </Button>
  );

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
            {buttonSwitch}
          </s.ButtonWrapper>
        </s.Detail>
      </s.Wrapper>
    </Modal>
  );
};

export default QuickView;
