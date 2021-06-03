import Navigation from "../Navigation/Navigation";
import Logo from "../UI/Logo";
import { Wrapper } from "./styles";

const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <Navigation />
    </Wrapper>
  );
};

export default Header;
