'use client';

import dayjs from "dayjs";
import { useEffect, useState } from "react";

export const useCountDown = (targetDate: string | Date) => {
  const calculateTimeLeft = () => {
    const now = dayjs();
    const target = dayjs(targetDate);
    const diff = target.diff(now);

    if (diff <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    const duration = dayjs.duration(diff);

    return {
      hours: Math.floor(duration.asHours()),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
  };
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
};
