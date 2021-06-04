import Card from "../../UI/Card";
import Heart from "../../UI/Icons/Heart";
import { Image, Detail, Title, Description, Price, Badge } from "./styles";

import { getImageById } from "../../../utils/image";

interface Props {
  item: {
    id: string;
    title: string;
    description: string;
    price: string;
  };
  isFavorite?: boolean;
}

const ProductListItem: React.FC<Props> = ({
  item: { id, title, description, price },
  isFavorite,
}) => {

  // Render according to favorite
  // Probably, this will change later
  const badge = isFavorite && (
    <Badge>
      <Heart />
    </Badge>
  );

  return (
    <Card>
      {badge}
      <Image src={getImageById(id, "320")} alt="T-Shirt" />
      <Detail>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price>{`$${price}`}</Price>
      </Detail>
    </Card>
  );
};

export default ProductListItem;
