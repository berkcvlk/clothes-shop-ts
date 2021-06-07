import { noitem } from "../../motion/variants";
import { Wrapper, Description } from "./styles";

const NoItem = () => {
  return (
    <Wrapper animate="visible" initial="hidden" variants={noitem}>
      <img src="/assets/no-item.png" alt="No Item" />
      <Description>There is currently no item here!</Description>
    </Wrapper>
  );
};

export default NoItem;
