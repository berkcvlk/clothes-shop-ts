import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.main`
  padding-top: 5px;
`;

export const Content = styled(motion.div)`
  padding-top: 15px;
`;

export const Title = styled.h1<{ content: string }>`
  position: relative;
  width: 100%;

  font-size: 25px;
  font-weight: 700;
  text-transform: lowercase;

  &:before {
    position: absolute;
    margin: auto;
    left: -55px;
    top: -30px;
    bottom: 0;

    color: rgba(211, 211, 211, 0.12);
    font-size: 60px;
    font-weight: 800;

    content: "${({ content }) => content}";
  }
`;
