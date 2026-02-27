"use client";

import { useCountDown } from "@/features/home/hooks";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { FC } from "react";

dayjs.extend(duration);

type Props = {
  targetDate: string;
}

export const CountdownBadge: FC<Props> = ({ targetDate }: Props) => {
  const { hours, minutes, seconds } = useCountDown(targetDate);

  const format = (num: number) => String(num).padStart(2, "0");

  return (
    <div suppressHydrationWarning>
      {format(hours)}h {format(minutes)}m {format(seconds)}s
    </div>
  );
}