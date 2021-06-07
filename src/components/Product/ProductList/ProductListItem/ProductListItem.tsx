import { useState } from "react";

import Card from "../../../UI/Card";
import Heart from "../../../UI/Icons/Heart";
import ProductOverlay from "./ProductOverlay";
import { Image, Detail, Title, Description, Price, Badge } from "./styles";

import { card } from "../../../../motion/variants";
import { IProduct } from "../../../../types";
import { images } from "../../../../utils/image";

interface Props {
  item: IProduct;
  fav?: boolean;
}

const ProductListItem: React.FC<Props> = ({ item, fav }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { id, title, description, price } = item;

  const onMouseOverHandler = () => {
    setIsHovered(true);
  };

  const onMouseLeaveHandler = () => {
    setIsHovered(false);
  };

  // Render according to mouse event
  // Probably this will change later
  const quickViewOverlay = isHovered && <ProductOverlay itemId={id} />;

  // Render according to favorite
  // Probably, this will change later, too
  const badge = fav && (
    <Badge>
      <Heart />
    </Badge>
  );

  return (
    <Card
      layout
      variants={card}
      onMouseOver={onMouseOverHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      {badge}
      {quickViewOverlay}
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
