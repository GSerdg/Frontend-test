import styled from "styled-components";

export const Container = styled.div`
  display: none;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-grow: 1;
    justify-content: end;
  }
`;
