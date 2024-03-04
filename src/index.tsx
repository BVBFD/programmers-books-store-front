import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App";

async function mountApp() {
  if (process.env.NODE_ENV === "development") {
    const { worker } = require("./mock/browser");
    // MSW 확실히 시작하고 나서, React App 마운트하기!!
    await worker.start();
  }

  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

mountApp();
