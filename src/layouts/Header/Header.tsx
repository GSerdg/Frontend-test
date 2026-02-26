import { FC } from "react";
import { HeaderLogo, HeaderMenu, HeaderNavigation } from "./components";
import styled from "styled-components";

const Container = styled.div`
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
    <Container>
      <HeaderLogo />
      <HeaderNavigation />
      <HeaderMenu>
        <HeaderNavigation />
      </HeaderMenu>
    </Container>
  );
};
