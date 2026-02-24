import { type PropsWithChildren } from "react";
import { Content, Drawer, Handle, Overlay } from "vaul";
import { Frame, BurgerCloseButton } from "./ModalBurgerDrawer.styled";



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
        <Overlay />
        <Content >
          <Drawer.Title />
          <Drawer.Description />
          <Frame>
            <BurgerCloseButton
              onClick={onClose}
              type="button"
            />
            {children}
            <Handle />
          </Frame>
        </Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
