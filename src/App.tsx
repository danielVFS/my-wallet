import React from "react";
import { ToastContainer } from "react-toastify";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import "react-toastify/dist/ReactToastify.min.css";

import { useTheme } from "./hooks/theme";

import Routes from "./routes";

const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
