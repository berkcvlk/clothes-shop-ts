import ProductProvider from "./Product";
import FavoriteProvider from "./Favorite";
import CartProvider from "./Cart";

const Providers: React.FC = ({ children }) => {
  return (
    <ProductProvider>
      <FavoriteProvider>
        <CartProvider>{children}</CartProvider>
      </FavoriteProvider>
    </ProductProvider>
  );
};

export default Providers;
