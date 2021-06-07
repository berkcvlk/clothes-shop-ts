import { useContext } from "react";
import { ProductContext } from "../../contexts/Product";

import ProductList from "../../components/Product/ProductList";
import Main from "../../layouts/Main";

const Home = () => {
  const { items } = useContext(ProductContext);
  return (
    <Main title="New Collection">
      <ProductList list={items} />
    </Main>
  );
};

export default Home;
