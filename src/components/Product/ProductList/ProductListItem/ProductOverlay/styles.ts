import { Link } from "react-router-dom";
import styled from "styled-components";

export const Backdrop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;
  border-radius: inherit;

  width: 100%;
  height: 100%;

  background-color: rgba(248, 248, 248, 0.85);
  backdrop-filter: blur(2px);
`;

export const WrapperLink = styled(Link)`
  display: flex;
  flex-direction: column;

  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

export const SpanFirst = styled.span`
  font-size: 13px;
  font-weight: 600;

  text-transform: uppercase;
`;

export const SpanLast = styled.span`
  font-size: 21px;
  font-weight: 800;

  color: var(--primary-color);
`;
