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
`;

export const ImageContainer = styled(Image)`
  display: flex;
  width: 25.3rem;
  height: 25.3rem;
  border-radius: 2.4rem;
`;

export const CardHead = styled.h2`
  margin: 0;
  font-size: 2.2rem;
  line-height: 2.4rem;
  font-weight: 600;
`;

export const PaymentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardTitle = styled.p`
  margin: 0;
  font-size: 1.4rem;
  line-height: 100%;
  font-weight: 400;
  color: #94a3b8;
`;

export const PriceContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

export const PriceTitle = styled.h3`
  margin: 0.4rem 0 0;
  font-size: 1.6rem;
  line-height: 150%;
  font-weight: 500;
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
