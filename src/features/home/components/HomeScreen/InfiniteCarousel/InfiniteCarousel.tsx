"use client";

import { FC, useLayoutEffect, useRef, useState } from "react";
import { useMotionValue, animate } from "framer-motion";
import { Card } from "../Card/Card";
import {
  Wrapper,
  Track,
  Controls,
  CardWrapper,
} from "./InfiniteCarousel.styled";
import { CarouselButtons } from "./CarouselButtons";

export const InfiniteCarousel: FC = () => {
  const baseCards = [1, 2, 3, 4, 5];
  const extended = [...baseCards, ...baseCards, ...baseCards];

  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const setWidthRef = useRef(0);

  const measure = () => {
    if (!trackRef.current) return;

    const firstCard = trackRef.current.children[0] as HTMLElement;

    if (!firstCard) return;

    const cardWidth = firstCard.getBoundingClientRect().width;

    const styles = getComputedStyle(trackRef.current);
    const gap = parseFloat(styles.columnGap || styles.gap);

    const oneSetWidth = (cardWidth + gap) * baseCards.length;

    setWidthRef.current = oneSetWidth;

    // старт в центре
    x.set(-oneSetWidth);
  };

  useLayoutEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const checkBounds = () => {
    const setWidth = setWidthRef.current;
    const current = x.get();

    if (current <= -setWidth * 2) {
      x.set(current + setWidth);
    }

    if (current >= 0) {
      x.set(current - setWidth);
    }
  };

  const move = (direction: "next" | "prev") => {
    if (!trackRef.current) return;

    const firstCard = trackRef.current.children[0] as HTMLElement;

    const cardWidth = firstCard.getBoundingClientRect().width;

    const styles = getComputedStyle(trackRef.current);
    const gap = parseFloat(styles.columnGap || styles.gap);

    const distance = cardWidth + gap;

    animate(x, x.get() + (direction === "next" ? -distance : distance), {
      duration: 0.35,
      onComplete: checkBounds,
    });
  };

  return (
    <>
      <Wrapper>
        <Track
          ref={trackRef}
          drag="x"
          dragConstraints={{ left: -Infinity, right: Infinity }}
          dragElastic={0.1}
          style={{ x }}
          onDragEnd={checkBounds}
        >
          {extended.map((_, index) => (
            <CardWrapper key={index}>
              <Card />
            </CardWrapper>
          ))}
        </Track>
      </Wrapper>
      <CarouselButtons
        prevSlide={() => move("prev")}
        nextSlide={() => move("next")}
      />
    </>
  );
};
