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
  background: #F1F1F1;
  flex-grow: 1;
`;

export const FooterWrapper = styled.div`
  background: #141416;
`;