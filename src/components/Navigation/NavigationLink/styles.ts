import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Navigation link inherited from
// React Router NavLink component to style
export const NavigationLink = styled(NavLink)`
  font-size: 18px;
  font-weight: 600;

  text-transform: lowercase;
  text-decoration: none;
  color: #818181;

  &:active,
  &.active {
    color: var(--primary-color);
  }

  & + & {
    margin-left: 35px;
  }
`;
