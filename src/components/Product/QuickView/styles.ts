import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const ImageContainer = styled.div`
  width: 320px;
  height: 480px;

  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 12px;
`;

export const Detail = styled.div`
  flex: 1 calc(100% - 320px);
  position: relative;

  padding: 40px 80px 0 50px;
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 15px;

  font-size: 24px;
  font-weight: 700;
`;

export const Description = styled.p`
  margin-top: 0;
  margin-bottom: 35px;

  font-size: 18px;
`;

export const Price = styled.p`
  margin-top: 0;
  margin-bottom: 35px;

  font-size: 24px;
  font-weight: 700;
`;

export const ButtonWrapper = styled.div`
  button + button {
    margin-top: 15px;
  }
`;
