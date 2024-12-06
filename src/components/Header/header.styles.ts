import styled from "styled-components";
import { Typography } from "../../theme/typography";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const Logo = styled.div`
  font-size: ${({ theme }) => theme.typography[Typography.Body2].fontSize};
  font-weight: ${({ theme }) => theme.typography[Typography.Body2].fontWeight};
  font-family: ${({ theme }) => theme.typography[Typography.Body2].fontFamily};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  > a {
    padding: 8px 0;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
  margin-right: 12px;

  &::after {
    content: "";
    position: relative;
    right: -1px;
    width: 2px;
    height: 24px;
    background-color: ${({ theme }) => theme.colors.border};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography[Typography.Body3].fontSize};
  font-weight: ${({ theme }) => theme.typography[Typography.Body3].fontWeight};
  transition: color 0.3s ease;
  cursor: pointer;
  > a {
    display: block;
    width: 100%;
    padding: 8px 0;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ActionGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ThemeToggleButton = styled.div`
  display: flex;
  justify-content: space-between;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography[Typography.Body2].fontSize};
  transition: color 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  @media (max-width: 768px) {
    padding: 8px 0;
  }
`;

export const HamburgerMenu = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  @media (max-width: 768px) {
    display: block;
    font-size: ${({ theme }) => theme.typography[Typography.Body2].fontSize};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const MobileMenuOverlay = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
  z-index: 999;
`;

export const MobileMenu = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "$isOpen",
})<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
  width: 70%;
  max-width: 300px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition:
    right 0.3s ease,
    opacity 0.3s ease;
  z-index: 1000;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.typography[Typography.Body2].fontSize};
    font-weight: ${({ theme }) =>
      theme.typography[Typography.Body2].fontWeight};
    transition: color 0.3s ease;
  }
`;

export const CloseMenuButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
  padding: 8px 0;
`;
export const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: ${({ theme }) => theme.colors.textext};
  }
`;

export const MobileMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  a {
    color: ${({ theme }) => theme.colors.textext};
  }
`;

export const MobileMenuFooter = styled.div`
  display: flex;
  flex-direction: column;
  a {
    color: ${({ theme }) => theme.colors.buttonText};
  }

  @media (max-width: 768px) {
    .download-cv {
      margin-top: 16px;
    }
  }
`;
export const LanguageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 8px 0;
`;

export const LanguageToggleButton = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.Body2.fontSize};
  cursor: pointer;

  &:hover {
    scale: 1.1;
  }
`;
