import { motion } from "framer-motion";
import styled from "styled-components";
import IconButton from "../Button/IconButton/IconButton";

export const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  left: 0;
  margin: auto;

  width: 890px;
  height: 565px;

  padding: 45px;

  background-color: #f4f4f4;
  border-radius: 15px;
`;

export const Content = styled(motion.div)`
  position: relative;

  width: 100%;
  height: 100%;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background-color: rgba(170, 170, 170, 0.7);
  backdrop-filter: blur(3px);
`;

export const CloseIconButton = styled(IconButton)`
  position: absolute;
  top: 0;
  right: 0;

  z-index: 1040;
`;
