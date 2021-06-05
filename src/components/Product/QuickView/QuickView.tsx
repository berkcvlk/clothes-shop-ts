import { useParams } from "react-router";

import Button from "../../UI/Button/Button";
import Modal from "../../UI/Modal/Modal";
import * as V from "./styles";

import { images } from "../../../utils/image";

const QuickView = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Modal>
      <V.Wrapper>
        <V.ImageContainer>
          <V.Image src={images(id, "320")} alt="title" />
          <V.AddFavoriteButton>Add to Favorites</V.AddFavoriteButton>
        </V.ImageContainer>
        <V.Detail>
          <V.Title>T-Shirt with Irregular Collar</V.Title>
          <V.Description>
            Faded t-shirt with an irregular collar and short turn-up sleeves.
          </V.Description>
          <V.Price>$79.99</V.Price>
          <Button theme="primary">Add to Cart</Button>
        </V.Detail>
      </V.Wrapper>
    </Modal>
  );
};

export default QuickView;
