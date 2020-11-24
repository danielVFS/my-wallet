import React from "react";
import GlobalStyles from "./styles/GlobalStyles";

import Layout from "./components/Layout";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Layout />
    </React.Fragment>
  );
};

export default App;
