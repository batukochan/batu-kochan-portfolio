import React, { useState } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "./i18n";
import ThemeProvider from "./theme";
import GlobalStyles from "./theme/GlobalStyles";
import Header from "./components/Header/header";
import Showcase from "./components/Showcase/showcase";
import LinkedinProfileSrc from "./assets/linkedinProfile.jpeg";
import Information from "./components/Information/information";
import Footer from "./components/Footer/footer";
export const App: React.FC = () => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("dark");

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const { t } = useTranslation();

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider themeMode={themeMode}>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} themeMode={themeMode} />
        <main>
          <Showcase
            name="Batuhan Koçhan"
            description={t("showcaseDesc")}
            location="İstanbul"
            avatar={LinkedinProfileSrc}
          ></Showcase>
     <Information></Information>
        </main>
        <Footer/>
      </ThemeProvider>
    </I18nextProvider>
  );
};

export default App;
