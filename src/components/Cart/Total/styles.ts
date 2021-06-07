import styled from "styled-components";

export const Wrapper = styled.div`
  position: sticky;
  top: 15px;

  display: flex;
  flex-direction: column;

  background-color: #f8f8f8;

  border-radius: 12px;
  padding: 25px 30px;
`;

export const SpanTotal = styled.span`
  font-size: 20px;
  color: #a7a7a7;
  font-weight: 800;
  text-transform: lowercase;
`;

export const TotalPrice = styled.span`
  font-size: 32px;
  font-weight: 600;

  margin-bottom: 15px;
`;
