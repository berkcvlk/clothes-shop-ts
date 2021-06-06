import { Add, Delete } from "../../../../UI/Icons";
import { Count, DecrementButton, IncrementButton, Wrapper } from "./styles";

const Amount = () => {
  return (
    <Wrapper>
      <DecrementButton>
        <Delete />
      </DecrementButton>
      <Count>1</Count>
      <IncrementButton>
        <Add />
      </IncrementButton>
    </Wrapper>
  );
};

export default Amount;
