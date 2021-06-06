import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 25% 25%;
  grid-template-rows: auto;
  row-gap: 20px;
`;

export const TableHeader = styled.span`
  color: #c5c5c5;

  font-size: 14px;
  font-weight: 800;
  text-transform: lowercase;
`;
