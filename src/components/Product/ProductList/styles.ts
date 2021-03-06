import { motion } from "framer-motion";
import styled from "styled-components";

export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 35px;
`;
