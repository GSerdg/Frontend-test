import { Arrow } from "@/components/svg";
import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: max-content;
  padding: 2rem;
  box-shadow: 0rem 4.3rem 3.4rem -2.587rem #0f0f0f1f;
  background: #fcfcfd;
  border-radius: 1.7rem;

  @media screen and (max-width: 1024px) {
    padding: 1.5rem;
    border-radius: 1.3rem;
  }
`;

const ButtonStyled = styled.button`
  display: flex;
  justify-content: flex-end;
  width: 5.4rem;
  padding: 0;
  cursor: pointer;
  border: none;
  background: inherit;

  @media screen and (max-width: 1024px) {
    width: 4rem;
  }
`;

const ArrowStyled = styled(Arrow)`
  width: 2.4rem;
  height: 2.4rem;
  transform: rotate(180deg);

  @media screen and (max-width: 1024px) {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

const Divider = styled.div`
  display: flex;
  border-left: 0.2rem solid #e6e8ec;
`;

type Props = {
  prevSlide: VoidFunction;
  nextSlide: VoidFunction;
};

export const CarouselButtons: FC<Props> = ({ prevSlide, nextSlide }) => {
  return (
    <Container>
      <ButtonStyled onClick={prevSlide} style={{ transform: "rotate(180deg)" }}>
        <ArrowStyled />
      </ButtonStyled>
      <Divider />
      <ButtonStyled onClick={nextSlide}>
        <ArrowStyled />
      </ButtonStyled>
    </Container>
  );
};
