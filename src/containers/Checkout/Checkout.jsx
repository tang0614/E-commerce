import React, { Component } from "react";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
  state = {
    ingredient: null,
  };
  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredient = {};
    for (let param of query.entries()) {
      ingredient[[param[0]]] = +param[1];
    }
    this.setState({ ingredient });
  }
  render() {
    return <CheckoutSummary ingredient={this.state.ingredient} />;
  }
}

export default Checkout;
