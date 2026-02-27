import { Crypto } from "@/components/svg";
import Image from "next/image";
import styled from "styled-components";

export const FlexColumn = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CardContainer = styled.article`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 20px;
  width: 28.1rem;
  border-radius: 2.4rem;
  padding: 1.4rem;
  background: #ffffff;
  box-shadow: 38px 12px 60px 0px #c7c7c799;

  @media screen and (max-width: 1024px) {
    width: 21rem;
  }
`;

export const ImageContainer = styled(Image)`
  display: flex;
  width: 25.3rem;
  height: 25.3rem;
  border-radius: 2.4rem;

  @media screen and (max-width: 1024px) {
    width: 19rem;
    height: 19rem;
  }
`;

export const CardHead = styled.h2`
  margin: 0;
  font-size: 2.2rem;
  line-height: 2.4rem;
  font-weight: 600;

  @media screen and (max-width: 1024px) {
    font-size: 1.6rem;
    line-height: 1.8rem;
  }
`;

export const PaymentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 0.4rem 0;

  @media screen and (max-width: 1024px) {
    gap: 0.7rem;
    padding: 0.2rem 0;
  }
`;

export const CardTitle = styled.p`
  margin: 0;
  font-size: 1.4rem;
  line-height: 100%;
  font-weight: 400;
  color: #94a3b8;

  @media screen and (max-width: 1024px) {
    font-size: 1.1rem;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

export const PriceTitle = styled.h3`
  font-size: 1.6rem;
  line-height: 150%;
  font-weight: 500;

  @media screen and (max-width: 1024px) {
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
`;

export const CardButton = styled.button`
  background-color: #141416;
  border: none;
  border-radius: 1.2rem;
  padding: 1.5rem 2.5rem;

  font-size: 1.4rem;
  font-weight: 600;
  line-height: 150%;
  color: #ffffff;

  cursor: pointer;
  transition: background 0.3s;

  @media screen and (max-width: 1024px) {
    font-size: 1.1rem;
    line-height: 150%;
    padding: 1rem 1.7rem;
  }

  &:hover {
    @media (hover: hover) and (pointer: fine) {
      background: #333333;
    }
  }

  &:active {
    @media (hover: none) {
      background: #333333;
    }
  }
`;

export const CryptoStyled = styled(Crypto)`
  width: 22px;
  height: 22px;

  @media screen and (max-width: 1024px) {
    width: 16px;
    height: 16px;
  }
`;
