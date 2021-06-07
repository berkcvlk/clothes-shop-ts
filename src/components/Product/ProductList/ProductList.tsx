import { IProduct } from "../../../types";

import ProductListItem from "./ProductListItem";
import { Grid } from "./styles";

interface Props {
  list: IProduct[];
  fav?: boolean;
}

const ProductList: React.FC<Props> = ({ fav, list }) => {
  return (
    <Grid>
      {list.map((e, i) => (
        <ProductListItem key={i} item={e} fav={fav} />
      ))}
    </Grid>
  );
};

export default ProductList;
