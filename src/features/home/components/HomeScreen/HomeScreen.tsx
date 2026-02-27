"use client";

import { motion } from "framer-motion";
import { FC } from "react";
import styled from "styled-components";
import { Card } from "./Card";

const ScreenContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 7rem;
  padding: 7rem 0;
`;

const HeadTitle = styled.h1`
  font-size: 4.6rem;
  font-weight: 600;
  line-height: 4.8rem;
  text-align: center;
  color: #C5C5C5;
`;

export const HomeScreen: FC = () => {
  return (
    <ScreenContainer
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
      }}
    >
      <HeadTitle>Weekly - Top NFT</HeadTitle>
      <Card />
    </ScreenContainer>
  );
};
