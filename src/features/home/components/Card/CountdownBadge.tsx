"use client";

import { useCountDown } from "@/features/home/hooks";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { FC } from "react";
import styled from "styled-components";
import { inter } from "@/../public/fonts";

dayjs.extend(duration);

const BadgeStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  position: absolute;
  top: 2.8rem;
  right: 2.5rem;

  font-size: 1.4rem;
  line-height: 100%;
  font-weight: 500;
  text-wrap: nowrap;
  color: #ffffff;
  font-variant-numeric: tabular-nums;

  background: #1c1d2059;
  border: 0.1rem solid #1c1d2014;
  border-radius: 1rem;
  padding: 1rem 1.4rem;

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
    line-height: 100%;
    padding: 0.7rem 1rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.1rem;
    line-height: 100%;
  }
`;

type Props = {
  targetDate: string;
};

const format = (num: number) => String(num).padStart(2, "0");

export const CountdownBadge: FC<Props> = ({ targetDate }: Props) => {
  const { hours, minutes, seconds } = useCountDown(targetDate);

  return (
    <BadgeStyled className={inter.className} suppressHydrationWarning>
      {format(hours)}h {format(minutes)}m {format(seconds)}s
    </BadgeStyled>
  );
};
