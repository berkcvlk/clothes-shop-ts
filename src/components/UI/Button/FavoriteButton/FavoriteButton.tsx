import { FC, useContext } from "react";
import { FavoriteContext } from "../../../../contexts/Favorite";

import Button from "../Button";

interface Props {
  id: string;
}

const FavoriteButton: FC<Props> = ({ id }) => {
  // To manipulate favorite list, use this functions
  const { add, remove, isFavorite } = useContext(FavoriteContext);
  const fav = isFavorite(id);

  const onFavoriteAdd = () => {
    add(id);
  };

  const onFavoriteRemove = () => {
    remove(id);
  };

  return (
    <Button onClick={fav ? onFavoriteRemove : onFavoriteAdd}>
      {fav ? "Remove from Favorites" : "Add to Favorite"}
    </Button>
  );
};

export default FavoriteButton;
