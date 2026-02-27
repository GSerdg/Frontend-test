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
  width: 53px;
  height: 53px;

  @media screen and (max-width: 1024px) {
    width: 38px;
    height: 38px;
  }

  @media screen and (max-width: 600px) {
    width: 46px;
    height: 46px;
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
