import Header from "../../components/Header";
import { Wrapper } from "./styles";

const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header></Header>
      {children}
    </Wrapper>
  );
};

export default Layout;
