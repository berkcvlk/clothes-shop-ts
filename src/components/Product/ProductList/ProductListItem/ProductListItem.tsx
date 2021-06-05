import { useState } from "react";

import Card from "../../../UI/Card";
import Heart from "../../../UI/Icons/Heart";
import ProductOverlay from "./ProductOverlay";
import { Image, Detail, Title, Description, Price, Badge } from "./styles";

import { images } from "../../../../utils/image";

interface IProduct {
  id: string;
  title: string;
  description: string;
  price: string;
}

interface Props {
  item: IProduct;
  isFavorite?: boolean;
}

const ProductListItem: React.FC<Props> = ({
  item: { id, title, description, price },
  isFavorite,
}) => {
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const onMouseOverHandler = () => {
    setIsMouseEntered(true);
  };

  const onMouseLeaveHandler = () => {
    setIsMouseEntered(false);
  };

  // Render according to mouse event
  // Probably this will change later
  const quickViewOverlay = isMouseEntered && <ProductOverlay itemId={id} />;

  // Render according to favorite
  // Probably, this will change later, too
  const badge = isFavorite && (
    <Badge>
      <Heart />
    </Badge>
  );

  return (
    <Card onMouseOver={onMouseOverHandler} onMouseLeave={onMouseLeaveHandler}>
      {quickViewOverlay}
      {badge}
      <Image src={images(id, "320")} alt={title} />
      <Detail>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price>{`$${price}`}</Price>
      </Detail>
    </Card>
  );
};

export default ProductListItem;
