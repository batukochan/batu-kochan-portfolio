import React from "react";
import { Typography } from "../../theme/typography";
import { Colors } from "../../theme/colors";

export interface TextProps {
  children: React.ReactNode;
  desktopTypography?: Typography;
  mobileTypography?: Typography;
  color?: keyof Colors; 
  bullet?: boolean;
  icon?: React.ReactNode;
}

export type TypographyKeys = Typography;

export type ColorKeys = keyof Colors;
