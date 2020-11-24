import React from "react";
import GlobalStyles from "./styles/GlobalStyles";

import Dashboard from "./pages/Dashboard";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Dashboard />
    </React.Fragment>
  );
};

export default App;
