import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Layout from "./components/layout/Layout";
import GlobalStyle from "./style/global";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./style/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={light}>
      <GlobalStyle themeName={`${light.name}`} />
      <Layout>
        <App />
      </Layout>
    </ThemeProvider>
  </React.StrictMode>
);
