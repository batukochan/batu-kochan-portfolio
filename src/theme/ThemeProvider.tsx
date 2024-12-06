import { FC, PropsWithChildren } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes.ts";

interface ThemeProviderProps extends PropsWithChildren {
  themeMode: "light" | "dark";
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, themeMode }) => {
  const currentTheme = themeMode === "dark" ? darkTheme : lightTheme;

  return <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;
