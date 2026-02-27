import { motion } from "framer-motion"
import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
`

export const Track = styled(motion.div)`
  display: flex;
  gap: 24px;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  @media (max-width: 768px) {
    gap: 16px;
  }
`

export const CardWrapper = styled.div`
  flex: 0 0 auto;
  width: 320px;

  @media (max-width: 1024px) {
    width: 280px;
  }

  @media (max-width: 768px) {
    width: 240px;
  }
`

export const Controls = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;
`
