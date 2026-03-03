'use client';

import { Logo } from "@/components/svg";
import { ROUTES } from "@/consts";
import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";
import { poppins } from "@/../public/fonts";

const LogoContainer = styled.div`
  display: flex;
  gap: 0.7rem;
  align-items: center;
`;

const LogoStyled = styled(Logo)`
  width: 5.3rem;
  height: 5.3rem;

  @media screen and (max-width: 1024px) {
    width: 3.8rem;
    height: 3.8rem;
  }

  @media screen and (max-width: 600px) {
    width: 4.6rem;
    height: 4.6rem;
  }
`;

const HeadTitle = styled.h3`
  display: none;
  margin: 0;

  font-size: 2.2rem;
  font-weight: 600;
  line-height: 2.4rem;

  @media screen and (max-width: 600px) {
    display: flex;
  }
`;

export const HeaderLogo: FC = () => {
  return (
    <LogoContainer>
      <Link href={ROUTES.HOME.href}>
        <LogoStyled />
      </Link>
      <HeadTitle className={poppins.className}>DiveSea</HeadTitle>
    </LogoContainer>
  );
};
