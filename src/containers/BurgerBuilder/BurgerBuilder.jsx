import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import Aux from "../../hoc/aux";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Summary from "../../components/Summary/Summary";
import classes from "./BurgerBuilder.module.css";

const INGREDIENT_PRICE = {
  salad: 1.5,
  bacon: 2.3,
  meat: 3.2,
  cheese: 2.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredient: {
      salad: 0,
      bacon: 0,
      meat: 0,
      cheese: 0,
    },
    purchase: false,
  };

  addIngredient = (type) => {
    const ingredient = { ...this.state.ingredient };
    ingredient[type] += 1;
    this.setState({ ingredient });
  };

  removeIngredient = (type) => {
    const ingredient = { ...this.state.ingredient };

    if (ingredient[type] <= 0) {
      return;
    }
    ingredient[type] -= 1;
    this.setState({ ingredient });
  };

  purchasing = () => {
    const purchase = true;
    this.setState({ purchase });
  };
  notPurchasing = () => {
    const purchase = false;
    this.setState({ purchase });
  };

  submitBill = () => {
    alert("submit bill");
  };

  render() {
    const disabledInfo = { ...this.state.ingredient };
    let totalPrice = 4;
    for (let key in disabledInfo) {
      totalPrice += disabledInfo[key] * INGREDIENT_PRICE[key];
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let purchasable = !(totalPrice > 4);
    console.log(disabledInfo);
    return (
      <Aux>
        <p>{`Total Burger Price is ${totalPrice}`}</p>
        <Burger ingredient={this.state.ingredient} />
        <BuildControls
          removeIngredient={this.removeIngredient}
          addIngredient={this.addIngredient}
          disabled={disabledInfo}
          purchase={this.state.purchase}
          purchasing={this.purchasing}
          purchasable={purchasable}
        />
        <Summary
          ingredients={this.state.ingredient}
          totalPrice={totalPrice}
          purchase={this.state.purchase}
          notPurchasing={this.notPurchasing}
          submitBill={this.submitBill}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
