import React, { Component } from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import Classes from "./CheckoutSummary.module.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class CheckoutSummary extends Component {
  cancelHandler = () => {
    this.props.history.goBack();
  };
  continueHandler = () => {
    this.props.history.push("/checkout/data");
  };

  render() {
    return (
      <div className={Classes.CheckoutSummary}>
        <h2 style={{ color: " #B85E36" }}>Order Confirmation</h2>
        <div style={{ width: "100%" }}>
          <Burger ingredient={this.props.ingredient} />
        </div>
        <div>
          <Button btnType="Danger" onClick={this.cancelHandler}>
            Cancel
          </Button>
          <Button btnType="Success" onClick={this.continueHandler}>
            Continue
          </Button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ingredient: state.burgerBuilder.ingredient,
  };
};

export default connect(mapStateToProps)(withRouter(CheckoutSummary));
