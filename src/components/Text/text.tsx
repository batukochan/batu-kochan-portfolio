import React from "react";
import { StyledText, BulletIconWrapper, IconWrapper } from "./text.styles.ts";
import { TextProps } from "./types.ts";

const Text: React.FC<TextProps> = ({
  children,
  desktoptypography,
  mobiletypography,
  color,
  bullet,
  icon,
  as = "p",
}) => {
  return (
    <StyledText
      as={as}
      desktoptypography={desktoptypography}
      mobiletypography={mobiletypography}
      color={color}
    >
      {bullet && <BulletIconWrapper>&#8226;</BulletIconWrapper>}
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {children}
    </StyledText>
  );
};

export default Text;
