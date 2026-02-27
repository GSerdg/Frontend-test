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
  color: #FFFFFF;
  font-variant-numeric: tabular-nums;

  background: #1C1D2059;
  border: 1px solid #1C1D2014;
  border-radius: 1rem;
  padding: 1rem 1.4rem;
`;

type Props = {
  targetDate: string;
}

const format = (num: number) => String(num).padStart(2, "0");

export const CountdownBadge: FC<Props> = ({ targetDate }: Props) => {
  const { hours, minutes, seconds } = useCountDown(targetDate);

  return (
    <BadgeStyled className={inter.className} suppressHydrationWarning>
      {format(hours)}h {format(minutes)}m {format(seconds)}s
    </BadgeStyled>
  );
}