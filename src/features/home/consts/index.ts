import { randomNumber } from "../utils";

export type CardDataType = {
  img: string;
  head: string;
  currentBid: number;
  date: string;
};

export const MOCK_CARDS_DATA: CardDataType[] = [
  {
    img: "/images/img1.jpg",
    head: "Sun-Glass",
    currentBid: randomNumber(),
    date: "2026-03-01T00:00:00",
  },
  {
    img: "/images/img2.jpg",
    head: "Sun-Glass",
    currentBid: randomNumber(),
    date: "2026-03-01T00:04:00",
  },
  {
    img: "/images/img3.jpg",
    head: "Sun-Glass",
    currentBid: randomNumber(),
    date: "2026-03-01T00:10:00",
  },
  {
    img: "/images/img4.jpg",
    head: "Sun-Glass",
    currentBid: randomNumber(),
    date: "2026-03-05T00:00:00",
  },
  {
    img: "/images/img5.jpg",
    head: "Sun-Glass",
    currentBid: randomNumber(),
    date: "2026-03-01T00:00:40",
  },
];
