import Link from "next/link";
import styled from "styled-components";

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;

export const NavigationItem = styled.li`
  display: flex;
`;

export const NavigationLink = styled(Link)`
  display: flex;
  column-gap: 5rem;
  align-items: center;

  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 500;
  text-wrap: nowrap;
  text-transform: uppercase;
  color: #606060;

  transition: color 0.3s;

  &:hover {
    @media (hover: hover) and (pointer: fine) {
      color: #000000;
    }
  }

  &:active {
    @media (hover: none) {
      color: #000000;
    }
  }
`;
