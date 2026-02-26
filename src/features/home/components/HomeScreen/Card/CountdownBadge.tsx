"use client";

import { useCountDown } from "@/features/home/hooks";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

interface Props {
  targetDate: string;
}

export default function CountdownBadge({ targetDate }: Props) {
  const { hours, minutes, seconds } = useCountDown(targetDate);

  const format = (num: number) => String(num).padStart(2, "0");

  return (
    <div>
      {format(hours)}h {format(minutes)}m {format(seconds)}s
    </div>
  );
}