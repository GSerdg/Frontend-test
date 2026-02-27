'use client'
import { FC } from "react";
import CardImage from "@/../public/images/img1.jpg";
import {
  CardContainer,
  ImageContainer,
  FlexColumn,
  CardHead,
  PaymentContainer,
  CardTitle,
  PriceContainer,
  PriceTitle,
  CardButton,
  CryptoStyled,
  DivContainer,
} from "./Card.styled";
import { CountdownBadge } from "./CountdownBadge";

export const Card: FC = () => {
  return (
    <CardContainer>
      <CountdownBadge targetDate="2026-03-01T00:00:00" />
      <ImageContainer src={CardImage} alt="image 1" loading="eager" />
      <FlexColumn>
        <CardHead>Sun-Glass</CardHead>
        <PaymentContainer>
          <DivContainer>
            <CardTitle>Current bid</CardTitle>
            <PriceContainer>
              <CryptoStyled />
              <PriceTitle>1.75</PriceTitle>
            </PriceContainer>
          </DivContainer>
        <CardButton>PLACE BID</CardButton>
        </PaymentContainer>
      </FlexColumn>
    </CardContainer>
  );
};
