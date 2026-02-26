import { type PropsWithChildren } from "react";
import { Drawer } from "vaul";
import { Frame, BurgerCloseButton, LogoContainer } from "./ModalBurgerDrawer.styled";
import { HeaderLogo } from "@/layouts/Header/components";
import "./modal-drawer.css"

interface Props extends PropsWithChildren {
  open: boolean;
  onClose: VoidFunction;
}

/**
 *
 * Обертка для модального окна меню навигации.
 *
 * Параметры:
 * - `open` - состояние окна (открыто/закрыто)
 * - `onClose` - функция, изменяющая состояние `open`
 *
 */
export function ModalBurgerDrawer({ children, open, onClose }: Props) {
  return (
    <Drawer.Root open={open} direction="top" onClose={onClose}>
      <Drawer.Portal>
        <Drawer.Overlay className="modal-drawer__overlay" />
        <Drawer.Content className="modal-burger-drawer__content">
          <Drawer.Title />
          <Drawer.Description />
          <Frame>
            <BurgerCloseButton onClick={onClose} type="button" />
            <LogoContainer>
              <HeaderLogo />
            </LogoContainer>
            {children}
            <Drawer.Handle className="modal-burger-drawer__handle" />
          </Frame>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
