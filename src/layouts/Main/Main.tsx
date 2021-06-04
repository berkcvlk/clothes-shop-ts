import { Wrapper, Content, Title } from "./styles";

interface Props {
  title: string;
}

const Main: React.FC<Props> = ({ children, title }) => {
  return (
    <Wrapper>
      <Title content={title}>{title}</Title>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Main;
