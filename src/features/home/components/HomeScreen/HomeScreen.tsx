"use client";

import { motion } from "framer-motion";
import { FC } from "react";
import styled from "styled-components";

const ScreenContainer = styled(motion.div)``;

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
      HomeScreen
    </ScreenContainer>
  );
};
