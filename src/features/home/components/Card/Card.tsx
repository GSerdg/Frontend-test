"use client";

import { FC } from "react";
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

type Props = {
  img: string;
  head: string;
  currentBid: number;
  date: string;
};

export const Card: FC<Props> = ({ img, head, currentBid, date }) => {
  return (
    <CardContainer>
      <CountdownBadge targetDate={date} />
      <ImageContainer
        src={img}
        height={253}
        width={253}
        alt="image"
        loading="eager"
        draggable="false"
      />
      <FlexColumn>
        <CardHead>{head}</CardHead>
        <PaymentContainer>
          <DivContainer>
            <CardTitle>Current bid</CardTitle>
            <PriceContainer>
              <CryptoStyled />
              <PriceTitle suppressHydrationWarning>{currentBid}</PriceTitle>
            </PriceContainer>
          </DivContainer>
             <CardButton
               type="button"
               draggable={false}
               style={{ cursor: "pointer" }}
             >
               PLACE BID
             </CardButton>
        </PaymentContainer>
      </FlexColumn>
    </CardContainer>
  );
};
