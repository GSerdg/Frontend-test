import styled from "styled-components";

export const BurgerButton = styled.button`
  --indicator-size: 4rem;
  --indicator-width: 4rem;
  --indicator-height: calc(0.06 * var(--indicator-size));
  --indicator-offset: calc(0.25 * var(--indicator-size));
  --indicator-offset-calc: calc(
    var(--indicator-offset) + var(--indicator-height)
  );

  width: var(--indicator-size);
  height: var(--indicator-size);
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  pointer-events: auto;
  z-index: var(--menu-button-index);

  &[data-open] {
    pointer-events: none;
  }

  & > span {
    display: block;
    width: 100%;
    width: var(--indicator-width);
    box-shadow: 0 2px 10px 0 rgba(0 0 0 / 30%);
    border-radius: 3px;
    height: var(--indicator-height);
    background-color: #000000;
    transition: all 0.3s;
    position: relative;
  }

  & > span + span {
    margin-top: var(--indicator-offset);
  }

  & span:nth-child(1) {
    animation: ease 0.7s top-2 forwards;
  }

  & span:nth-child(2) {
    animation: ease 0.7s scaled-2 forwards;
  }

  & span:nth-child(3) {
    animation: ease 0.7s bottom-2 forwards;
  }

  &[data-open] span:nth-child(3) {
    animation: ease 0.7s bottom forwards;
  }

  &[data-open] span:nth-child(1) {
    animation: ease 0.7s top forwards;
  }

  &[data-open] span:nth-child(2) {
    animation: ease 0.7s scaled forwards;
  }

  @keyframes top {
    0% {
      top: 0;
      transform: rotate(0);
    }

    50% {
      top: var(--indicator-offset-calc);
      transform: rotate(0);
    }

    100% {
      top: var(--indicator-offset-calc);
      transform: rotate(45deg);
    }
  }

  @keyframes top-2 {
    0% {
      top: var(--indicator-offset-calc);
      transform: rotate(45deg);
    }

    50% {
      top: var(--indicator-offset-calc);
      transform: rotate(0deg);
    }

    100% {
      top: 0;
      transform: rotate(0deg);
    }
  }

  @keyframes bottom {
    0% {
      bottom: 0;
      transform: rotate(0);
    }

    50% {
      bottom: var(--indicator-offset-calc);
      transform: rotate(0);
    }

    100% {
      bottom: var(--indicator-offset-calc);
      transform: rotate(135deg);
    }
  }

  @keyframes bottom-2 {
    0% {
      bottom: var(--indicator-offset-calc);
      transform: rotate(135deg);
    }

    50% {
      bottom: var(--indicator-offset-calc);
      transform: rotate(0);
    }

    100% {
      bottom: 0;
      transform: rotate(0);
    }
  }

  @keyframes scaled {
    50% {
      transform: scale(0);
    }

    100% {
      transform: scale(0);
    }
  }

  @keyframes scaled-2 {
    0% {
      transform: scale(0);
    }

    50% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }
`;
