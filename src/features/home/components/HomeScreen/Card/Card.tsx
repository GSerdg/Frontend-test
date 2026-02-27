import { FC } from "react";
import CardImage from "@/../public/images/img1.jpg";
import { Crypto } from "@/components/svg";
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
          <div>
            <CardTitle>Current bid</CardTitle>
            <PriceContainer>
              <Crypto />
              <PriceTitle>1.75</PriceTitle>
            </PriceContainer>
          </div>
        <CardButton>PLACE BID</CardButton>
        </PaymentContainer>
      </FlexColumn>
    </CardContainer>
  );
};
