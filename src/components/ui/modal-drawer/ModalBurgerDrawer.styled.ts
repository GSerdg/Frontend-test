import styled from "styled-components";

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

  .header-navigation {
    width: 100%;
  }

  ul {
    flex-flow: column;
    gap: 2rem;
    padding-block: 2rem;
    border-block: 1px solid #858585;
    width: 100%;
  }
`;

export const BurgerCloseButton = styled.button`
  margin: 0;
	padding: 0;

	line-height: inherit;
	text-align: unset;

	background-color: transparent;
	border: none;
	box-shadow: none;
	box-sizing: border-box;
	cursor: pointer;

  position: absolute;
  top: 2rem;
  right: 3.5rem;
  width: 3rem;
  height: 3rem;
`;

