import Link from "next/link";
import styled from "styled-components";

export const NavigationList = styled.ul`
  display: flex;
  gap: 7rem;

  @media screen and (max-width: 1024px) {
    gap: 5rem;
  }

    @media screen and (max-width: 670px) {
    flex-direction: column;
    gap: 3rem,
  }
`;

export const NavigationItem = styled.li`
  display: flex;
`;

export const NavigationLink = styled(Link)`
  display: flex;

  text-decoration: none;
  font-size: 1.8rem;
  line-height: 2.6rem;
  font-weight: 500;
  text-wrap: nowrap;
  color: #B9B9B9;

  transition: color 0.3s;

  @media screen and (max-width: 1024px) {
    font-size: 1.2rem;
    line-height: 2rem;
  }

    @media screen and (max-width: 670px) {
    font-size: 1.4rem;
    line-height: 2rem;
    text-transform: uppercase;
  }

  &:hover {
    @media (hover: hover) and (pointer: fine) {
      color: #d8d8d8;
    }
  }

  &:active {
    @media (hover: none) {
      color: #d8d8d8;
    }
  }
`;
