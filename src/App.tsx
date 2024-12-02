import React, { useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import ThemeProvider from "./theme";
import GlobalStyles from "./theme/GlobalStyles";
import Header from "./components/Header/header";

export const App: React.FC = () => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider themeMode={themeMode}>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} themeMode={themeMode} />
        <main>
          <h1>Welcome to My Portfolio</h1>
        </main>
      </ThemeProvider>
    </I18nextProvider>
  );
};

export default App;
