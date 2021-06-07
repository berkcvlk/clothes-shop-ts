import { useContext } from "react";

import { FavoriteContext } from "../../contexts/Favorite";
import ProductList from "../../components/Product/ProductList";
import Main from "../../layouts/Main";
import NoItem from "../NoItem";

const Favorites = () => {
  const { items } = useContext(FavoriteContext);

  // If there is no item on the favorites
  // render the error page
  const noitem = !items.length && <NoItem />;

  return (
    <Main title="Favorites">
      {noitem || <ProductList list={items} fav={true} />}
    </Main>
  );
};

export default Favorites;
