import styled from "styled-components";
import IconButton from "../../../../UI/Button/IconButton/IconButton";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Count = styled.span`
  font-size: 18px;
  font-weight: 800;
  margin: 0 20px;
`;

export const DecrementButton = styled(IconButton)`
  background-color: #f8f8f8;
  border-radius: 5px;
  padding: 5px;
`;

export const IncrementButton = styled(IconButton)`
  background-color: #f8f8f8;
  border-radius: 5px;
  padding: 5px;
`;
