import { useEffect, useState } from "react";

import ProductListItem from "./ProductListItem";
import { Grid } from "./styles";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchList = async () => {
      const response = await fetch("/dummy.json");
      const data = await response.json();
      setProductList(data);
      setLoading(false);
    };

    const delay = setTimeout(fetchList, 555);
    return () => clearTimeout(delay);
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <Grid>
      {productList.map((e, i) => (
        <ProductListItem item={e} key={i} />
      ))}
    </Grid>
  );
};

export default ProductList;
