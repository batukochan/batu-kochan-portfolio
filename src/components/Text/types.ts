import React from "react";
import { Typography } from "../../theme/typography";
import { Colors } from "../../theme/colors";

export interface TextProps {
  children: React.ReactNode;
  desktoptypography?: Typography;
  mobiletypography?: Typography;
  color?: keyof Colors;
  bullet?: boolean;
  icon?: React.ReactNode;
  as?: keyof JSX.IntrinsicElements; // as özelliği eklendi

}

export type TypographyKeys = Typography;

export type ColorKeys = keyof Colors;
