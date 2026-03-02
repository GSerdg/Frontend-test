import styled from "styled-components";

export const LayoutGrid = styled.div`
  --container-max-width: 1240px;
  --container-margin: 9.7rem;

  display: grid;
  grid-template-columns:
    minmax(var(--container-margin), 33.7rem)
    min(var(--container-max-width), 100% - 2 * var(--container-margin))
    minmax(var(--container-margin), 33.7rem);

  & > * {
    grid-column: 2;
  }

  @media screen and (max-width: 1440px) {
    --container-margin: 6.7rem;
  }

  @media screen and (max-width: 1024px) {
    --container-margin: 3rem;
  }
`;

export const ContentStyled = styled.div`
  background: #f1f1f1;
  flex-grow: 1;
`;

export const HeaderWrapper = styled.div`
  background: #f9f9f9;
  position: sticky;
  top: 0;
  z-index: 10;
  border-radius: 0 0 2rem 2rem;

  animation: colorChange linear both;
  animation-timeline: scroll();
  animation-range: 50px 200px;

  @keyframes colorChange {
    from {
      background-color: #f9f9f9;
    }
    to {
      background-color: #d1d1d1ff;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
  }
`;

export const HeaderSpace = styled.div`
  width: 100%;
  height: 2.8rem;
  background: #f9f9f9;

  @media screen and (max-width: 1024px) {
    height: 0.8rem;
  }
`;

export const FooterWrapper = styled.div`
  background: #141416;
`;
