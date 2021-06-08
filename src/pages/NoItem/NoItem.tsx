import { noitem } from "../../motion/variants";
import { Wrapper, Description } from "./styles";
import NoItemSvg from "./NoItemSvg";

const NoItem = () => {
  return (
    <Wrapper animate="visible" initial="hidden" variants={noitem}>
      <NoItemSvg />
      <Description>There is currently no item here!</Description>
    </Wrapper>
  );
};

export default NoItem;
