import { styled } from "styled-components";

export const NavBar = styled.div`
  width: 100%;
  height: 64px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  background: #fff;
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.12),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
  @media (max-width: 1381px) {
    position: relative;
  }
`;

export const LogoContainer = styled.div`
  width: 70%;
`;

export const MenuContent = styled.div`
  color: #008aff;
  display: flex;
  :hover {
    cursor: pointer;
  }
`;

export const MobileTopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NavBarOption = styled.span`
  color: #4d574f;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const ButtonDefault = styled.button`
  display: inline-flex;
  width: 180px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  background: #008aff;
  box-shadow: 0px 3px 6px 0px rgba(158, 158, 158, 0.29);
  border: none;
  font-size: 16px;
  color: #fff;
  @media (max-width: 960px) {
    width: 120px;
    font-size: 14px;
  }
  :hover {
    cursor: pointer;
  }
`;

export const ButtonOutlined = styled.button`
  display: inline-flex;
  width: 180px;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  background: none;
  color: #008aff;
  border: 1px solid #008aff;
  padding: 10px;
  font-size: 16px;
  box-shadow: 0px 3px 6px 0px rgba(158, 158, 158, 0.29);
  @media (max-width: 960px) {
    width: 120px;
    font-size: 14px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const MobileMenuContent = styled.div`
  display: none;
  @media (max-width: 1381px) {
    display: block;
    background: #fff;
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    height: 100vh;
    padding: 20px;
    z-index: 2;
    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.12),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
  }
`;

export const MobileMenuOption = styled.span`
  color: #4d574f;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 10px;
  flex-direction: column;
  display: flex;
  margin-top: 2rem;
  :hover {
    color: #008aff;
    cursor: pointer;
  }
`;

export const MobileMenuButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.625rem;
  margin-top: 30rem;
  justify-content: center;
`;
