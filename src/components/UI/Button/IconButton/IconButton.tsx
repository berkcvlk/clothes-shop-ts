import styled from "styled-components";
import Button from "../Button";

const IconButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1px;
  border-radius: 15px;

  &:hover {
    background-color: #ebebeb;
  }
`;
export default IconButton;
