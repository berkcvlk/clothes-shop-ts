import { useEffect, useState } from "react";
import ProductListItem from "./ProductListItem";
import { Grid } from "./styles";

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      const response = await fetch("/dummy.json");
      const data = await response.json();
      setProductList(data);
    };

    fetchList();
  }, []);

  return (
    <Grid>
      {productList.map((e, i) => (
        <ProductListItem item={e} key={i} />
      ))}
    </Grid>
  );
};

export default ProductList;
