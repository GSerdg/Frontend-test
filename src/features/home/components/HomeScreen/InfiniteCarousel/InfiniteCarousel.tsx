"use client";

import { FC, useLayoutEffect, useRef } from "react";
import { useMotionValue, animate } from "framer-motion";
import { Card } from "../Card/Card";
import { Wrapper, Track } from "./InfiniteCarousel.styled";
import { CarouselButtons } from "./CarouselButtons";
import { MOCK_CARDS_DATA } from "@/features/home/consts";

const extended = [
  ...MOCK_CARDS_DATA,
  ...MOCK_CARDS_DATA,
  ...MOCK_CARDS_DATA,
  ...MOCK_CARDS_DATA,
  ...MOCK_CARDS_DATA,
];
const CENTER_CARD_INDEX = Math.floor(MOCK_CARDS_DATA.length / 2);

export const InfiniteCarousel: FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);

  const metricsRef = useRef({
    itemSize: 0,
    setWidth: 0,
    baseX: 0,
    originIndex: 0,
    activeIndex: 0,
  });

  const measure = () => {
    if (!trackRef.current || !wrapperRef.current) return;

    const first = trackRef.current.children[0] as HTMLElement;
    if (!first) return;

    const cardWidth = first.getBoundingClientRect().width;

    const styles = getComputedStyle(trackRef.current);
    const gap = Number.parseFloat(styles.gap || styles.columnGap || "0");

    const itemSize = cardWidth + gap;
    const len = MOCK_CARDS_DATA.length;
    const setWidth = itemSize * len;

    const containerWidth = wrapperRef.current.getBoundingClientRect().width;

    const centerOffset = (containerWidth - cardWidth) / 2;

    const midSetStart = 2 * len;
    const originIndex = midSetStart + CENTER_CARD_INDEX;

    const baseX = centerOffset - originIndex * itemSize;

    metricsRef.current = {
      itemSize,
      setWidth,
      baseX,
      originIndex,
      activeIndex: originIndex,
    };

    x.set(baseX);
  };

  useLayoutEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const moveToIndex = (index: number) => {
    const { itemSize, baseX, originIndex } = metricsRef.current;

    metricsRef.current.activeIndex = index;

    const newX = baseX - (index - originIndex) * itemSize;

    animate(x, newX, {
      duration: 0.35,
      onComplete: () => {
        const len = MOCK_CARDS_DATA.length;
        const pos = ((metricsRef.current.activeIndex % len) + len) % len;

        const normalizedIndex = originIndex + (pos - CENTER_CARD_INDEX);

        if (normalizedIndex !== metricsRef.current.activeIndex) {
          const diff = metricsRef.current.activeIndex - normalizedIndex;
          metricsRef.current.activeIndex = normalizedIndex;
          x.set(x.get() + diff * itemSize);
        }
      },
    });
  };

  const next = () => {
    moveToIndex(metricsRef.current.activeIndex + 1);
  };

  const prev = () => {
    moveToIndex(metricsRef.current.activeIndex - 1);
  };

  const handleDragEnd = () => {
    const { itemSize, baseX, originIndex } = metricsRef.current;

    const currentX = x.get();
    const delta = baseX - currentX;

    const moved = Math.round(delta / itemSize);

    moveToIndex(originIndex + moved);
  };

  return (
    <>
      <Wrapper ref={wrapperRef}>
        <Track
          ref={trackRef}
          drag="x"
          dragConstraints={{ left: -Infinity, right: Infinity }}
          dragElastic={0.08}
          style={{ x }}
          onDragEnd={handleDragEnd}
        >
          {extended.map((item, index) => (
            <Card
              key={index}
              img={item.img}
              head={item.head}
              currentBid={item.currentBid}
              date={item.date}
            />
          ))}
        </Track>
      </Wrapper>
      <CarouselButtons prevSlide={prev} nextSlide={next} />
    </>
  );
};
