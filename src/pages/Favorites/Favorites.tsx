import { useContext } from "react";

import { FavoriteContext } from "../../contexts/Favorite";
import ProductList from "../../components/Product/ProductList";
import Main from "../../layouts/Main";

const Favorites = () => {
  const { items } = useContext(FavoriteContext);

  return (
    <Main title="Favorites">
      <ProductList list={items} fav={true} />
    </Main>
  );
};

export default Favorites;
