import styled from "styled-components";

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid #f4f4f4;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 383px;
  margin-top: 50px;
  flex-direction: column;
`;

export const FooterText = styled.div`
  margin-top: 48px;
  color: #888;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const FooterIcon = styled.div`
  background-image: url("../../icons/${(props) => props.icon}.svg");
  background-position: center;
  width: 50px;
  height: 50px;
  border-radius: 27.5px;
  background-color: #008aff;
  cursor: pointer;
`;

export const FooterIconsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;
  padding-bottom: 1rem;
`;
