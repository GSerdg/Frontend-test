'use client';

import { Logo } from "@/components/svg";
import { ROUTES } from "@/consts";
import { useMediaQuery } from "@/hooks";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { FC, useMemo } from "react";
import styled from "styled-components";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
});

export const LogoContainer = styled.div`
  display: flex;
  gap: 0.7rem;
  align-items: center;
`;

export const HeadTitle = styled.h1`
  display: none;
  font-size: 2.2rem;
  font-weight: 600;
  line-height: 2.4rem;

  @media screen and (max-width: 600px) {
    display: flex;
  }
`;

export const HeaderLogo: FC = () => {
  const isTablet = useMediaQuery(1024);
  const isMobile = useMediaQuery(600);

  const logoSize = useMemo(() => {
    if (isMobile) {
      return 46;
    }

    if (isTablet) {
      return 38;
    }

    return 54;
  }, [isMobile, isTablet]);

  return (
    <LogoContainer>
      <Link href={ROUTES.HOME.href}>
        <Logo width={logoSize} height={logoSize} />
      </Link>
      <HeadTitle className={poppins.className}>DiveSea</HeadTitle>
    </LogoContainer>
  );
};
