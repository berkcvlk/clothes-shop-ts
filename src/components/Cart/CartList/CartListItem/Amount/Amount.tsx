import { useContext } from "react";

import { CartContext } from "../../../../../contexts/Cart";
import { ICartItem } from "../../../../../types";

import { Add, Delete, Minus } from "../../../../UI/Icons";
import { Count, DecrementButton, IncrementButton, Wrapper } from "./styles";

interface Props {
  item: ICartItem;
}

const Amount: React.FC<Props> = ({ item }) => {
  const { add, remove } = useContext(CartContext);
  const { id, amount } = item;

  const onAdd = () => add(item);
  const onRemove = () => remove(id);

  // Make the decrement button toggle
  // according to amount. If it's 1, icon will be
  // trash bin, otherwise it'll be the dash
  const decrementSwitch = amount === 1 ? <Delete /> : <Minus />;

  return (
    <Wrapper>
      <DecrementButton onClick={onRemove}>{decrementSwitch}</DecrementButton>
      <Count>{amount}</Count>
      <IncrementButton onClick={onAdd}>
        <Add />
      </IncrementButton>
    </Wrapper>
  );
};

export default Amount;
