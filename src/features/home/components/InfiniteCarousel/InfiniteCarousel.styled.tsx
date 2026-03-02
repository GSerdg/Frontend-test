import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const Track = styled(motion.div)`
  display: flex;
  gap: 4rem;
  cursor: grab;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const Controls = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

