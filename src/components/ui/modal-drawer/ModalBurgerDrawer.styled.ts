import styled from "styled-components";

export const Frame = styled.aside`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  flex-flow: column;
  align-items: center;
  padding: 0 3rem;
  background-color: var(--modal-background);
  overscroll-behavior-y: contain;

  .header-navigation {
    width: 100%;
  }

  ul {
    flex-flow: column;
    gap: 2rem;
    padding-block: 4.4rem;
    border-top: 0.1rem solid #CBCBCB;
    align-items: start;

    li a {
      font-size: 4rem;
      line-height: 4.2rem;
    }
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
  top: 3.7rem;
  right: 3rem;
  width: 4rem;
  height: 4rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 10.4rem;
`;