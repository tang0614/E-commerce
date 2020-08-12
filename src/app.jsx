import React, { Component } from "react";
import Layout from "./containers/Layout/layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Aux from "./hoc/aux";
import { Route, Switch } from "react-router-dom";
import Orders from "./containers/Checkout/Orders/Orders";

class app extends Component {
  render() {
    return (
      <Layout>
        {
          <Aux>
            <Switch>
              <Route exact path="/" component={BurgerBuilder} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/orders" component={Orders} />
            </Switch>
          </Aux>
        }
      </Layout>
    );
  }
}

export default app;
