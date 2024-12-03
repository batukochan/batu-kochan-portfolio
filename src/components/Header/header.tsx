import React, { useState } from "react";
import {
  HeaderContainer,
  Logo,
  Nav,
  NavItem,
  ActionGroup,
  ThemeToggleButton,
  HamburgerMenu,
  MobileMenuOverlay,
  MobileMenu,
  CloseMenuButton,
  MobileMenuHeader,
  MobileMenuContent,
  MobileMenuFooter,
  LanguageContainer,
  LanguageToggleButton,
} from "./header.styles";
import { HeaderProps } from "./types";
import Button from "../Button/button.tsx";
import {
  CloseIcon,
  DarkModeIcon,
  HamburgerIcon,
  LightModeIcon,
} from "../../assets/icons.tsx";
import { useTranslation } from "react-i18next";

const Header: React.FC<HeaderProps> = ({ toggleTheme, themeMode }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleLanguage = () => {
    const nextLang = i18n.language === "en" ? "tr" : "en";
    i18n.changeLanguage(nextLang);
  };

  return (
    <>
      <HeaderContainer>
        {!isMenuOpen && (
          <>
            <Logo>BK</Logo>
            <HamburgerMenu onClick={toggleMenu} aria-label="Open Menu">
              <HamburgerIcon/>
            </HamburgerMenu>
            <Nav>
              <NavItem href="#about"> {t("about")}</NavItem>
              <NavItem href="#work"> {t("experience")}</NavItem>
              <NavItem href="#contact"> {t("contact")}</NavItem>
            </Nav>
            <ActionGroup>
              <ThemeToggleButton onClick={toggleTheme}>
                {themeMode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
              </ThemeToggleButton>
              <LanguageToggleButton onClick={toggleLanguage}>
                {i18n.language.toUpperCase()}
              </LanguageToggleButton>
              <Button isDownload href="/path-to-cv.pdf" variant="default">
                {t("downloadCv")}
              </Button>
            </ActionGroup>
          </>
        )}
      </HeaderContainer>

      <MobileMenuOverlay isOpen={isMenuOpen} onClick={closeMenu} />
      <MobileMenu $isOpen={isMenuOpen}>
        <MobileMenuHeader>
          <Logo>BK</Logo>
          <CloseMenuButton onClick={closeMenu} aria-label="Close Menu">
            <CloseIcon></CloseIcon>
          </CloseMenuButton>
        </MobileMenuHeader>

        <MobileMenuContent>
          <NavItem href="#about" onClick={closeMenu}>
            {t("about")}
          </NavItem>
          <NavItem href="#work" onClick={closeMenu}>
            {t("experience")}
          </NavItem>
          <NavItem href="#contact" onClick={closeMenu}>
            {t("contact")}
          </NavItem>
        </MobileMenuContent>

        <MobileMenuFooter>
          <ThemeToggleButton onClick={toggleTheme}>
            {t("toggleTheme")}{" "}
            {themeMode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </ThemeToggleButton>
          <LanguageContainer>
          Dil Seçimi
          <LanguageToggleButton onClick={toggleLanguage}>
            {i18n.language.toUpperCase()}
          </LanguageToggleButton>
          </LanguageContainer>
         
          <Button isDownload href="/path-to-cv.pdf" variant="default">
            {t("downloadCv")}
          </Button>
        </MobileMenuFooter>
      </MobileMenu>
    </>
  );
};

export default Header;
