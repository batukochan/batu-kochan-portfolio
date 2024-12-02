import { FC, PropsWithChildren } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import typography from "./typography";
import fonts from "./fonts";
import { lightColors, darkColors } from "./colors";

export interface Theme {
  typography: typeof typography;
  fonts: typeof fonts;
  colors: typeof lightColors; // Light ve dark aynı tipte olduğu için
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

interface ThemeProviderProps extends PropsWithChildren {
  themeMode: "light" | "dark";
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, themeMode }) => {
  const currentTheme = themeMode === "dark" ? darkTheme : lightTheme;

  return <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;
