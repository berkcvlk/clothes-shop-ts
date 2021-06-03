import NavigationLink from "./NavigationLink";
import { Wrapper } from "./styles";

const Navigation = () => {
  return (
    <Wrapper>
      <NavigationLink to="/favorites">Favorites</NavigationLink>
      <NavigationLink to="/cart">Cart</NavigationLink>
    </Wrapper>
  );
};

export default Navigation;
