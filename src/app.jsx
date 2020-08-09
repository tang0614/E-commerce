import React from "react";
import Layout from "./components/Layout/layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

const App = () => {
  return <Layout>{<BurgerBuilder />}</Layout>;
};

export default App;
