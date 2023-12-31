import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {ThemeProvider} from "@emotion/react";
import theme from "./theme/theme.ts";
import {ThemeProviderWrapper} from "./theme/ThemeProviderWrapper.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ThemeProviderWrapper>
        <App />
      </ThemeProviderWrapper>
    </ThemeProvider>
  </React.StrictMode>
);
