"use client";

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

const LogoContainer = styled.div`
  display: flex;
  gap: 0.7rem;
  align-items: center;

  @media screen and (max-width: 600px) {
    margin-bottom: 3.2rem;
  }
`;

const HeadTitle = styled.h1`
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
  const isTablet = useMediaQuery(1024);
  const isMobile = useMediaQuery(600);

  const logoSize = useMemo(() => {
    if (isTablet) {
      return 46;
    }

    return 65;
  }, [isMobile, isTablet]);

  return (
    <LogoContainer>
      <Link href={ROUTES.HOME.href}>
        <Logo width={logoSize} height={logoSize} color="#FFFFFF" />
      </Link>
      <HeadTitle className={poppins.className}>DiveSea</HeadTitle>
    </LogoContainer>
  );
};
