import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 290px;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
`;

export const Detail = styled.div`
  padding: 0 40px 30px;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 5px;
`;

export const Description = styled.p`
  min-height: 60px;
  margin-top: 0;
  margin-bottom: 20px;
`;

export const Price = styled.span`
  font-size: 16px;
  font-weight: 800;
`;

export const Badge = styled.span`
  position: absolute;
  top: 20px;
  left: 20px;

  width: 24px;
  height: 24px;
  border-radius: 50%;

  text-align: center;
  line-height: 1.8;

  background-color: var(--faded-color);
`;
