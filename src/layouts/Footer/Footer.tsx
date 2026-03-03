"use client";

import { FC } from "react";
import { FooterLogo, FooterNavigation } from "./components";
import styled from "styled-components";
import { motion } from "framer-motion";

const MotionContainer = styled(motion.footer)`
  display: flex;
  flex-direction: column;
  padding: 8.8rem 0;

  @media screen and (max-width: 1024px) {
    padding: 6rem 0;
  }

  @media screen and (max-width: 670px) {
    padding: 5.2rem 0 4rem;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 670px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Divider = styled.div`
  display: flex;
  margin-top: 2.5rem;
  border-bottom: solid 0.1rem;
  border-color: #818181;

  @media screen and (max-width: 1024px) {
    margin-top: 2.1rem;
  }

  @media screen and (max-width: 670px) {
    margin-top: 4.8rem;
  }
`;

const Title = styled.p`
  margin: 5.6rem 0 0;
  font-size: 1.7rem;
  font-weight: 500;
  line-height: 2.5rem;
  color: #999999;

  @media screen and (max-width: 1024px) {
    margin: 4rem 0 0;
    font-size: 1.2rem;
    line-height: 1.7rem;
  }

  @media screen and (max-width: 670px) {
    margin: 2.6rem 0 0;
    font-size: 1.4rem;
    line-height: 1.6rem;

    &:after {
      content: " DiveSea All Rights Reserved.";
    }
  }
`;

export const Footer: FC = () => {
  return (
    <MotionContainer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.05,
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
      }}
    >
      <FlexWrapper>
        <FooterLogo />
        <FooterNavigation />
      </FlexWrapper>
      <Divider />
      <Title>© 2023</Title>
    </MotionContainer>
  );
};
