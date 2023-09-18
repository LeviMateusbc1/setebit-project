import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SlideContainer = styled.div`
  margin-top: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 60%;
  margin-top: 8rem;
  align-items: start;
  justify-content: start;
  gap: 2rem;
  @media (max-width: 960px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;
