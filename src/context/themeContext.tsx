import React, { createContext, useEffect, useMemo, useState } from "react";
import { ThemeName, getTheme } from "../style/theme";
import GlobalStyle from "../style/global";
import { ThemeProvider } from "styled-components";

const DEFAULT_THEME_NAME = "light";
const THEME_LOCALSTORAGE_KEY = "book_store_theme";

interface State {
  themeName: ThemeName;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<State>({
  themeName: DEFAULT_THEME_NAME,
  toggleTheme: () => {},
});

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [themeName, setThemeName] = useState<ThemeName>(DEFAULT_THEME_NAME);

  const toggleTheme = () => {
    setThemeName((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    localStorage.setItem(
      THEME_LOCALSTORAGE_KEY,
      themeName === "light" ? "dark" : "light"
    );
  };

  const contextValue = useMemo(
    () => ({
      themeName,
      toggleTheme,
    }),
    [themeName, toggleTheme]
  );

  useEffect(() => {
    const savedThemeName = localStorage.getItem("light");
    setThemeName((savedThemeName || DEFAULT_THEME_NAME) as ThemeName);
  }, []);

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={getTheme(`${themeName}`)}>
        <GlobalStyle
          themeName={`${themeName}` === "light" ? "light" : "dark"}
        />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
