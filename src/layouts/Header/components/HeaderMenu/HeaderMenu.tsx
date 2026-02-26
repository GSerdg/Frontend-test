"use client";

import {
  useEffect,
  type MouseEventHandler,
  type PropsWithChildren,
} from "react";
import { useDisclosure, useMediaQuery } from "@/hooks";
import { ModalBurgerDrawer } from "@/components/ui";
import { MenuButton } from "../MenuButton";
import { Container } from "./HeaderMenu.styled";

export function HeaderMenu({ children }: PropsWithChildren) {
  const { isOpen, close, toggle } = useDisclosure(false);

  const isShowBurger = useMediaQuery(600);

  const handleClick: MouseEventHandler<HTMLElement> = (event) => {
    const target = event.target as HTMLElement;

    if (isOpen && target.closest(".header-navigation__link")) {
      close();
    }
  };

  function handleClickMenuButton() {
    window.scrollTo(0, 0);
    toggle();
  }

  useEffect(() => {
    if (!isShowBurger) {
      close();
    }
  }, [isShowBurger]);

  return (
    <Container onClick={handleClick}>
      <ModalBurgerDrawer open={isOpen} onClose={() => close()}>
        {children}
      </ModalBurgerDrawer>
      <MenuButton open={isOpen} onClick={handleClickMenuButton} />
    </Container>
  );
}

