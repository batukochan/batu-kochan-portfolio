import typography from "./typography";
import fonts from "./fonts";
import { lightColors, darkColors } from "./colors";

export interface Theme {
  typography: typeof typography;
  fonts: typeof fonts;
  colors: typeof lightColors;
}

export const lightTheme: Theme = {
  typography,
  fonts,
  colors: lightColors,
};

export const darkTheme: Theme = {
  typography,
  fonts,
  colors: darkColors,
};
