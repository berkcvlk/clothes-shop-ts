import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 25% 25%;
  align-items: center;
`;

export const Detail = styled.div`
  display: flex;
  align-items: center;
`;

export const DetailImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 12px;
`;

export const DetailBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
`;

export const DetailTitle = styled.h3`
  font-size: 16px;
  font-weight: 800;

  margin-top: 0;
  margin-bottom: 7px;
`;

export const DetailPrice = styled.span`
  font-size: 18px;
  font-weight: 800;
`;

export const Subtotal = styled(DetailPrice)`
  font-weight: 600;
`;
