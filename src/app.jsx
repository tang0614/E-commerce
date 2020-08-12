import React, { Component } from "react";
import Layout from "./containers/Layout/layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

class app extends Component {
  render() {
    return <Layout>{<BurgerBuilder />}</Layout>;
  }
}

export default app;
