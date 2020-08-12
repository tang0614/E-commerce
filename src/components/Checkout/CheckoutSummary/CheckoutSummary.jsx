import React, { Component } from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import Classes from "./CheckoutSummary.module.css";
import { withRouter } from "react-router-dom";

class CheckoutSummary extends Component {
  cancelHandler = () => {
    console.log("go back");
    this.props.history.goBack();
  };
  continueHandler = () => {
    console.log("continue");
    this.props.history.push("/checkout/data");
  };
  render() {
    return (
      <div className={Classes.CheckoutSummary}>
        <h2>We hope it takes well</h2>
        <div style={{ width: "100%" }}>
          <Burger ingredient={this.props.ingredient} />
        </div>
        <Button btnType="Danger" onClick={this.cancelHandler}>
          Cancel
        </Button>
        <Button btnType="Success" onClick={this.continueHandler}>
          Continue
        </Button>
      </div>
    );
  }
}

export default withRouter(CheckoutSummary);
