'use client';

import { FC } from "react";
import { HeaderLogo, HeaderMenu, HeaderNavigation } from "./components";
import styled from "styled-components";
import { motion } from "framer-motion";

const MotionContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 6.6rem;
  height: 14.5rem;

  @media screen and (max-width: 1024px) {
    height: 10.4rem;
    gap: 4rem;
  }

  & > .header-navigation {
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
`;

export const Header: FC = () => {
  return (
    <MotionContainer
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.05,
        // duration: 0.3,
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
      }}
    >
      <HeaderLogo />
      <HeaderNavigation />
      <HeaderMenu>
        <HeaderNavigation />
      </HeaderMenu>
    </MotionContainer>
  );
};
