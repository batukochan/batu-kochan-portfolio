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
import { Link } from "react-scroll";

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
            <Logo>
              <Link
                to="showcase"
                smooth={true}
                duration={500}
                onClick={closeMenu}
              >
                BK
              </Link>
            </Logo>
            <HamburgerMenu onClick={toggleMenu} aria-label="Open Menu">
              <HamburgerIcon />
            </HamburgerMenu>
            <Nav>
              <NavItem>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  onClick={closeMenu}
                >
                  {t("about")}
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="skills"
                  smooth={true}
                  duration={500}
                  onClick={closeMenu}
                >
                  {t("skills")}
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="experience"
                  smooth={true}
                  duration={500}
                  onClick={closeMenu}
                >
                  {t("experience")}
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  onClick={closeMenu}
                >
                  {t("contact")}
                </Link>
              </NavItem>
            </Nav>
            <ActionGroup>
              <ThemeToggleButton onClick={toggleTheme}>
                {themeMode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
              </ThemeToggleButton>
              <LanguageToggleButton onClick={toggleLanguage}>
                {i18n.language.toUpperCase()}
              </LanguageToggleButton>
              <Button isDownload href="/batu-kochan-cv.pdf" variant="default">
                {t("downloadCv")}
              </Button>
            </ActionGroup>
          </>
        )}
      </HeaderContainer>

      <MobileMenuOverlay isOpen={isMenuOpen} onClick={closeMenu} />
      <MobileMenu $isOpen={isMenuOpen}>
        <MobileMenuHeader>
          <Logo>
            <Link
              to="showcase"
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              BK
            </Link>
          </Logo>
          <CloseMenuButton onClick={closeMenu} aria-label="Close Menu">
            <CloseIcon></CloseIcon>
          </CloseMenuButton>
        </MobileMenuHeader>

        <MobileMenuContent>
          <NavItem>
            <Link to="about" smooth={true} duration={500} onClick={closeMenu}>
              {t("about")}
            </Link>
          </NavItem>
          <NavItem>
            <Link to="skills" smooth={true} duration={500} onClick={closeMenu}>
              {t("skills")}
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              {t("experience")}
            </Link>
          </NavItem>
          <NavItem>
            <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>
              {t("contact")}
            </Link>
          </NavItem>
        </MobileMenuContent>

        <MobileMenuFooter>
          <ThemeToggleButton onClick={toggleTheme}>
            {t("toggleTheme")}{" "}
            {themeMode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </ThemeToggleButton>
          <LanguageContainer onClick={toggleLanguage}>
            {t("languageChange")}
            <LanguageToggleButton>
              {i18n.language.toUpperCase()}
            </LanguageToggleButton>
          </LanguageContainer>

          <Button className="download-cv" isDownload href="/batu-kochan-cv.pdf" variant="default">
            {t("downloadCv")}
          </Button>
        </MobileMenuFooter>
      </MobileMenu>
    </>
  );
};

export default Header;
