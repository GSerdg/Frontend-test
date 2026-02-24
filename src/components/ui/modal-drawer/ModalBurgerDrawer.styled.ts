import styled from "styled-components";
import { Drawer } from "vaul";

export const Overlay = styled(Drawer.Overlay)`
  position: fixed;
  inset: 0;
  background-color: #00000066;
  z-index: var(--modal--burger-overlay-index);
`;

export const Content = styled(Drawer.Content)`
  display: flex;
  width: 100vw;
  height: 100dvh;
  overflow-y: auto;
  padding: 8rem 3rem;
`;

export const Frame = styled.aside`
  display: flex;
  position: relative;
  width: 100%;
  flex-flow: column;
  align-items: center;
  padding: 6rem 3.2rem 1.2rem 3.2rem;
  background-color: var(--modal-background);
  border-radius: 0 0 1.6rem 1.6rem;
  overscroll-behavior-y: contain;
`;

export const BurgerCloseButton = styled.button`
  display: flex;
  position: relative;
  width: 100%;
  flex-flow: column;
  align-items: center;
  padding: 6rem 3.2rem 1.2rem 3.2rem;
  background-color: var(--modal-background);
  border-radius: 0 0 1.6rem 1.6rem;
  overscroll-behavior-y: contain;
`;

export const Handle = styled(Drawer.Handle)`
	margin-top: 1.5rem;
	background-color: #c3c3c8;
`;