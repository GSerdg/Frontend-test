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
    gap: 1.6rem;
  }
`;

export const Controls = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

