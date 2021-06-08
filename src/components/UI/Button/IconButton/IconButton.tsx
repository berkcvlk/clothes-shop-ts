import styled from "styled-components";
import Button from "../Button";

const IconButton = styled(Button)`
  min-width: fit-content !important;

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
