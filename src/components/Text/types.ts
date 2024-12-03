import { Typography } from "../../theme/typography";
import { Colors } from "../../theme/colors";

// Text Bileşeni Türleri
export interface TextProps {
  children: React.ReactNode;
  desktopTypography?: Typography; // Desktop için tipografi
  mobileTypography?: Typography; // Mobile için tipografi
  color?: keyof Colors; // Renk enum'u (Colors anahtarları)
  bullet?: boolean; // Madde işareti
  icon?: React.ReactNode; // Simge
}

// Typography Enum'u
export type TypographyKeys = Typography;

// Renk Enum'u
export type ColorKeys = keyof Colors;
