import React, { Component } from "react";
import Order from "../../../components/Checkout/Order/Order";
import instance from "../../../axios-order";
import withErrorHandler from "../../../hoc/withErrorHandler";
class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };
  componentDidMount() {
    console.log("componentDidMount");
    instance
      .get("/orders.json")
      .then((res) => {
        let orders = [];
        for (let key in res.data) {
          orders.push({ ...res.data[key], id: key });
        }
        this.setState({ loading: false, orders: orders });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }
  render() {
    console.log("orders are", this.state.orders);
    return (
      <div>
        {this.state.orders.map((order) => {
          return (
            <Order
              key={order.id}
              ingredient={order.ingredient}
              price={order.price}
            />
          );
        })}
      </div>
    );
  }
}

export default withErrorHandler(Orders, instance);
