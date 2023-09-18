import React, { useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { CloseIcon, Logo, Menu } from "../../icons";
import * as Style from "./styles";

const NavBar = () => {
  const isTablet = useMediaQuery("(max-width: 1200px)");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Style.NavBar>
      {isTablet ? (
        <>
          <Style.LogoContainer>
            <Logo />
          </Style.LogoContainer>
          <Style.MenuContent onClick={toggleMobileMenu}>
            <Menu />
          </Style.MenuContent>
        </>
      ) : (
        <>
          <Logo />
          <Style.NavBarOption>Ver bolões</Style.NavBarOption>
          <Style.NavBarOption>Aposte com seus números</Style.NavBarOption>
          <Style.NavBarOption>Resultados</Style.NavBarOption>
          <Style.ButtonContainer>
            <Style.ButtonOutlined>Contato</Style.ButtonOutlined>
            <Style.ButtonDefault>Crie Bolões</Style.ButtonDefault>
          </Style.ButtonContainer>
        </>
      )}
      {isMobileMenuOpen ? (
        <Style.MobileMenuContent>
          <Style.MenuContent onClick={toggleMobileMenu}>
            <CloseIcon />
          </Style.MenuContent>
          <Style.MobileMenuOption>Ver bolões</Style.MobileMenuOption>
          <Style.MobileMenuOption>
            Aposte com seus números
          </Style.MobileMenuOption>
          <Style.MobileMenuOption>Resultados</Style.MobileMenuOption>
          <Style.MobileMenuButtonContainer>
            <Style.ButtonOutlined>Contato</Style.ButtonOutlined>
            <Style.ButtonDefault>Crie Bolões</Style.ButtonDefault>
          </Style.MobileMenuButtonContainer>
        </Style.MobileMenuContent>
      ) : null}
      {isMobileMenuOpen && <Style.Overlay onClick={toggleMobileMenu} />}
    </Style.NavBar>
  );
};

export default NavBar;
