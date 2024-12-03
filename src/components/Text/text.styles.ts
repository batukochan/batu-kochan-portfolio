import styled from "styled-components";
import { Typography } from "../../theme/typography";
import { Colors } from "../../theme/colors";

interface StyledTextProps {
  desktopTypography?: Typography;
  mobileTypography?: Typography;
  color?: keyof Colors;
}

export const StyledText = styled.p<StyledTextProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;

  font-family: ${({ theme, desktopTypography }) =>
    desktopTypography
      ? theme.typography[desktopTypography]?.fontFamily
      : theme.typography.Body1.fontFamily};
  font-size: ${({ theme, desktopTypography }) =>
    desktopTypography
      ? theme.typography[desktopTypography]?.fontSize
      : theme.typography.Body1.fontSize};
  font-weight: ${({ theme, desktopTypography }) =>
    desktopTypography
      ? theme.typography[desktopTypography]?.fontWeight
      : theme.typography.Body1.fontWeight};
  line-height: ${({ theme, desktopTypography }) =>
    desktopTypography
      ? theme.typography[desktopTypography]?.lineHeight
      : theme.typography.Body1.lineHeight};
  letter-spacing: ${({ theme, desktopTypography }) =>
    desktopTypography
      ? theme.typography[desktopTypography]?.letterSpacing
      : theme.typography.Body1.letterSpacing};

  color: ${({ theme, color }) => (color ? theme.colors[color] : theme.colors.text)};

  @media (max-width: 768px) {
    font-family: ${({ theme, mobileTypography }) =>
      mobileTypography
        ? theme.typography[mobileTypography]?.fontFamily
        : theme.typography.Body1.fontFamily};
    font-size: ${({ theme, mobileTypography }) =>
      mobileTypography
        ? theme.typography[mobileTypography]?.fontSize
        : theme.typography.Body1.fontSize};
    font-weight: ${({ theme, mobileTypography }) =>
      mobileTypography
        ? theme.typography[mobileTypography]?.fontWeight
        : theme.typography.Body1.fontWeight};
    line-height: ${({ theme, mobileTypography }) =>
      mobileTypography
        ? theme.typography[mobileTypography]?.lineHeight
        : theme.typography.Body1.lineHeight};
    letter-spacing: ${({ theme, mobileTypography }) =>
      mobileTypography
        ? theme.typography[mobileTypography]?.letterSpacing
        : theme.typography.Body1.letterSpacing};
  }
`;

export const BulletIconWrapper = styled.span`
  color: ${({ theme }) => theme.colors.text};
  margin-right: 8px;
`;

export const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 16px;
    height: 16px;
    fill: ${({ theme }) => theme.colors.iconColor};
    stroke: ${({ theme }) => theme.colors.iconStroke};
  }
`;
