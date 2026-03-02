'use client';

import { FC } from "react";
import { HeaderLogo, HeaderMenu, HeaderNavigation } from "./components";
import styled from "styled-components";
import { motion } from "framer-motion";

const MotionContainer = styled(motion.header)`
  display: flex;
  position: sticky;
  top: 0;
  align-items: center;
  gap: 6.6rem;
  height: 8.8rem;

  @media screen and (max-width: 1024px) {
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
