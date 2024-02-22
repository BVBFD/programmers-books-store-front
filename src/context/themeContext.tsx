import React, { createContext, useMemo, useState } from "react";
import { ThemeName } from "../style/theme";
import GlobalStyle from "../style/global";

interface State {
  themeName: ThemeName;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<State>({
  themeName: "light",
  toggleTheme: () => {},
});

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [themeName, setThemeName] = useState<ThemeName>("light");

  const toggleTheme = () => {
    setThemeName((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const contextValue = useMemo(
    () => ({
      themeName,
      toggleTheme,
    }),
    []
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <GlobalStyle themeName={`${themeName}` === "light" ? "light" : "dark"} />
      {children}
    </ThemeContext.Provider>
  );
};
