"use client";

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

  @media screen and (max-width: 670px) {
    margin-bottom: 3.2rem;
  }
`;

const LogoStyled = styled(Logo)`
  width: 6.5rem;
  height: 6.5rem;

  @media screen and (max-width: 1024px) {
    width: 4.6rem;
    height: 4.6rem;
  }
`;

const HeadTitle = styled.h3`
  display: flex;
  margin: 0;

  font-size: 3rem;
  font-weight: 600;
  line-height: 130%;
  color: #ffffff;

  @media screen and (max-width: 1024px) {
    font-size: 2.2rem;
  }
`;

export const FooterLogo: FC = () => {
  return (
    <LogoContainer>
      <Link href={ROUTES.HOME.href}>
        <LogoStyled color="#FFFFFF" />
      </Link>
      <HeadTitle className={poppins.className}>DiveSea</HeadTitle>
    </LogoContainer>
  );
};
