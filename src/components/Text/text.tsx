import React from "react";
import { StyledText, BulletIconWrapper, IconWrapper } from "./text.styles.ts";
import {TextProps} from "./types.ts"

const Text: React.FC<TextProps> = ({ children, desktopTypography,mobileTypography, color, bullet, icon }) => {
  return (
    <StyledText desktopTypography={desktopTypography} mobileTypography={mobileTypography} color={color}>
      {bullet && <BulletIconWrapper>&#8226;</BulletIconWrapper>}
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {children}
    </StyledText>
  );
};

export default Text;
