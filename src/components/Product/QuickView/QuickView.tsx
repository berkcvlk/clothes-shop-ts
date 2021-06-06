import { useParams } from "react-router";

import Button from "../../UI/Button/Button";
import Modal from "../../UI/Modal/Modal";
import * as s from "./styles";

import { images } from "../../../utils/image";

const QuickView = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Modal>
      <s.Wrapper>
        <s.ImageContainer>
          <s.Image src={images(id, "320")} alt="title" />
          <s.AddFavoriteButton>Add to Fasorites</s.AddFavoriteButton>
        </s.ImageContainer>
        <s.Detail>
          <s.Title>T-Shirt with Irregular Collar</s.Title>
          <s.Description>
            Faded t-shirt with an irregular collar and short turn-up sleeses.
          </s.Description>
          <s.Price>$79.99</s.Price>
          <Button theme="primary">Add to Cart</Button>
        </s.Detail>
      </s.Wrapper>
    </Modal>
  );
};

export default QuickView;
