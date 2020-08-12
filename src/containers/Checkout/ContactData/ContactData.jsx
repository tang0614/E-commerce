import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import Classes from "./ContactData.module.css";
import instance from "../../../axios-order";
import Spinner from "../../../components/UI/Spinner/Spinner";
import { withRouter } from "react-router-dom";
class ContactData extends Component {
  state = {
    name: "",
    loading: false,
  };
  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const newOrder = {
      ingredient: this.props.ingredient,
      price: this.props.price,
      customer: {
        name: "Anna Tang",
        address: {
          street: "195 RockIsland RD",
        },
      },
    };

    instance
      .post("/orders.json", newOrder)
      .then((res) => {
        this.props.history.push("/");
        this.setState({ loading: false });
      })
      .catch((error) => this.setState({ loading: false }));
  };
  render() {
    let form = (
      <form>
        <input type="text" name="name" placeholder="name" />
        <Button btnType={"Success"} onClick={this.orderHandler}>
          Order
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={Classes.ContactData}>
        <h4>Enter your info</h4>
        {form}
      </div>
    );
  }
}

export default withRouter(ContactData);
