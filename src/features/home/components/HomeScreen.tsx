"use client";

import { motion } from "framer-motion";
import { FC, Suspense } from "react";
import styled from "styled-components";
import { InfiniteCarousel } from "./InfiniteCarousel";
import { CardsQuery } from "@/api";
import Skeleton from "react-loading-skeleton";

const ScreenContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 7rem;
  padding: 7rem 0;
`;

const HeadTitle = styled.h1`
  font-size: 4.6rem;
  font-weight: 600;
  line-height: 4.8rem;
  text-align: center;
  color: #c5c5c5;

  @media screen and (max-width: 1024px) {
    font-size: 3.2rem;
    line-height: 3.6rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 3rem;
    line-height: 3rem;
  }
`;

export const HomeScreen: FC<{ cardsData: CardsQuery[] | null }> = ({
  cardsData,
}) => {
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
      {cardsData ? <InfiniteCarousel cardsData={cardsData} /> : 'Error loading'}
    </ScreenContainer>
  );
};
