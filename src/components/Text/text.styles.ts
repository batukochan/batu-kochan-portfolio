import styled from "styled-components";
import { Typography } from "../../theme/typography";
import { Colors } from "../../theme/colors";

interface StyledTextProps {
  as?: keyof JSX.IntrinsicElements; 
  desktoptypography?: Typography;
  mobiletypography?: Typography;
  color?: keyof Colors;
}

export const StyledText = styled.p<StyledTextProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;

  font-family: ${({ theme, desktoptypography }) =>
    desktoptypography
      ? theme.typography[desktoptypography]?.fontFamily
      : theme.typography.Body1.fontFamily};
  font-size: ${({ theme, desktoptypography }) =>
    desktoptypography
      ? theme.typography[desktoptypography]?.fontSize
      : theme.typography.Body1.fontSize};
  font-weight: ${({ theme, desktoptypography }) =>
    desktoptypography
      ? theme.typography[desktoptypography]?.fontWeight
      : theme.typography.Body1.fontWeight};
  line-height: ${({ theme, desktoptypography }) =>
    desktoptypography
      ? theme.typography[desktoptypography]?.lineHeight
      : theme.typography.Body1.lineHeight};
  letter-spacing: ${({ theme, desktoptypography }) =>
    desktoptypography
      ? theme.typography[desktoptypography]?.letterSpacing
      : theme.typography.Body1.letterSpacing};

  color: ${({ theme, color }) => (color ? theme.colors[color] : theme.colors.text)};

  @media (max-width: 768px) {
    font-family: ${({ theme, mobiletypography }) =>
      mobiletypography
        ? theme.typography[mobiletypography]?.fontFamily
        : theme.typography.Body1.fontFamily};
    font-size: ${({ theme, mobiletypography }) =>
      mobiletypography
        ? theme.typography[mobiletypography]?.fontSize
        : theme.typography.Body1.fontSize};
    font-weight: ${({ theme, mobiletypography }) =>
      mobiletypography
        ? theme.typography[mobiletypography]?.fontWeight
        : theme.typography.Body1.fontWeight};
    line-height: ${({ theme, mobiletypography }) =>
      mobiletypography
        ? theme.typography[mobiletypography]?.lineHeight
        : theme.typography.Body1.lineHeight};
    letter-spacing: ${({ theme, mobiletypography }) =>
      mobiletypography
        ? theme.typography[mobiletypography]?.letterSpacing
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
