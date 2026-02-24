import { Logo } from "@/components/svg";
import { ROUTES } from "@/consts";
import Link from "next/link";
import { FC } from "react";
import { HeaderNavigation } from "./components";
import styled from "styled-components";
import { HeaderMenu } from "./components/HeaderMenu";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
});

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 6.6rem;
  height: 14.5rem;

  & > .header-navigation {
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
`;

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

export const Header: FC = () => {
  return (
    <Container>
      <LogoContainer>
        <Link href={ROUTES.HOME.href}>
          <Logo />
        </Link>
        <HeadTitle className={poppins.className}>DiveSea</HeadTitle>
      </LogoContainer>
      <HeaderNavigation />
      <HeaderMenu>
        <HeaderNavigation />
      </HeaderMenu>
    </Container>
  );
};
