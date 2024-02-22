import { ThemeProvider } from "styled-components";
import "./App.css";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import { ThemeContext, ThemeContextProvider } from "./context/themeContext";
import Home from "./pages/Home";
import { getTheme } from "./style/theme";
import Layout from "./components/layout/Layout";
import { useContext } from "react";

function App() {
  const { themeName } = useContext(ThemeContext);

  return (
    <ThemeContextProvider>
      <ThemeProvider theme={getTheme(`${themeName}`)}>
        <Layout>
          <ThemeSwitcher />
          <Home />
        </Layout>
      </ThemeProvider>
    </ThemeContextProvider>
  );
}

export default App;
