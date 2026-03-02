import { randomNumber } from "../utils";
import dayjs from "dayjs";

export type CardDataType = {
  img: string;
  currentBid: number;
  date: string;
};

export const MOCK_CARDS_DATA: CardDataType[] = [
  {
    img: "/images/img1.jpg",
    currentBid: randomNumber(),
    date: dayjs()
      .add(Math.floor(Math.random() * 3 * 24 * 60 * 60), "second")
      .toISOString(),
  },
  {
    img: "/images/img2.jpg",
    currentBid: randomNumber(),
    date: dayjs()
      .add(Math.floor(Math.random() * 3 * 24 * 60 * 60), "second")
      .toISOString(),
  },
  {
    img: "/images/img3.jpg",
    currentBid: randomNumber(),
    date: dayjs()
      .add(Math.floor(Math.random() * 3 * 24 * 60 * 60), "second")
      .toISOString(),
  },
  {
    img: "/images/img4.jpg",
    currentBid: randomNumber(),
    date: dayjs()
      .add(Math.floor(Math.random() * 3 * 24 * 60 * 60), "second")
      .toISOString(),
  },
  {
    img: "/images/img5.jpg",
    currentBid: randomNumber(),
    date: dayjs()
      .add(Math.floor(Math.random() * 3 * 24 * 60 * 60), "second")
      .toISOString(),
  },
];
