import { useEffect, useState } from "react";
import { IProduct } from "../../../types";
import { products } from "../../../motion/variants";

import ProductListItem from "./ProductListItem";
import { Grid } from "./styles";

interface Props {
  list: IProduct[];
  fav?: boolean;
}

const ProductList: React.FC<Props> = ({ fav, list }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // For animation on first load of page
  // check the list content. When the content
  // loaded on the list, animate productList
  useEffect(() => {
    if (list.length) {
      setIsLoaded(true);
    }
  }, [list]);

  return (
    <Grid
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      variants={products}
    >
      {list.map((e, i) => (
        <ProductListItem key={i} item={e} fav={fav} />
      ))}
    </Grid>
  );
};

export default ProductList;
