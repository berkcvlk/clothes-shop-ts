import styled from "styled-components";

const Button = styled.button<{ theme?: "primary" }>`
  min-width: 200px;

  border: none;
  outline: none;

  font-family: "Sarabun", sans-serif;
  font-size: 16px;
  font-weight: 700;

  padding: 10px 45px;

  cursor: pointer;
  border-radius: 5px;

  background-color: ${({ theme }) =>
    theme === "primary" ? "var(--primary-color)" : "#e5e5e5"};
  color: ${({ theme }) =>
    theme === "primary" ? "white" : "var(--text-color)"};

  &:hover {
    background: ${({ theme }) => (theme === "primary" ? "#ff9d5e" : "#ebebeb")};
  }

  &:active,
  &.active {
    transform: scale(0.96);
  }

  transition: all 0.225s;
`;

export default Button;
