import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-height: 300px;
`;

export const Description = styled(motion.p)`
  margin-top: 35px;
  font-size: 18px;
  color: #c2c2c2;
`;
