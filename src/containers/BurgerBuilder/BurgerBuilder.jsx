import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import Aux from "../../hoc/aux";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Summary from "../../components/Burger/Summary/Summary";
import instance from "../../axios-order";
import Spinner from "../../components/UI/Spinner/Spinner";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import Module from "../../components/UI/Model/Module";
import withErrorHandler from "../../hoc/withErrorHandler";

const INGREDIENT_PRICE = {
  salad: 1.5,
  bacon: 2.3,
  meat: 3.2,
  cheese: 2.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredient: null,
    purchase: false,
    loading: false,
  };

  componentDidMount() {
    instance
      .get("/ingredient.json")
      .then((res) => this.setState({ ingredient: res.data }))
      .catch((error) => console.log(error));
  }

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

  submitBill = (totalPrice) => {
    this.setState({ loading: true });

    const queryParams = [];
    for (let key in this.state.ingredient) {
      queryParams.push(
        encodeURIComponent(key) +
          "=" +
          encodeURIComponent(this.state.ingredient[key])
      );
    }
    const queryString = queryParams.join("&");

    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString,
    });
    // const newOrder = {
    //   ingredient: this.state.ingredient,
    //   price: totalPrice,
    //   customer: {
    //     name: "Anna Tang",
    //     address: {
    //       street: "195 RockIsland RD",
    //     },
    //   },
    // };
    // instance
    //   .post("/orders.json", newOrder)
    //   .then((res) => this.setState({ loading: false, purchase: false }))
    //   .catch((error) => this.setState({ loading: false, purchase: false }));
  };

  render() {
    const disabledInfo = { ...this.state.ingredient };
    let totalPrice = 4;
    for (let key in disabledInfo) {
      totalPrice += disabledInfo[key] * INGREDIENT_PRICE[key];
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let purchasable = !(totalPrice > 4);

    let burger = <Spinner />;
    let summary = null;
    if (this.state.ingredient) {
      burger = (
        <Aux>
          {" "}
          <Burger ingredient={this.state.ingredient} />{" "}
          <BuildControls
            removeIngredient={this.removeIngredient}
            addIngredient={this.addIngredient}
            disabled={disabledInfo}
            purchase={this.state.purchase}
            purchasing={this.purchasing}
            purchasable={purchasable}
          />
        </Aux>
      );
      summary = (
        <Summary
          ingredients={this.state.ingredient}
          totalPrice={totalPrice}
          submitBill={() => this.submitBill(totalPrice)}
        />
      );
    }

    if (this.state.loading) {
      summary = <Spinner />;
    }

    return (
      <Aux>
        <p>{`Total Burger Price is ${totalPrice}`}</p>
        {burger}
        {
          <Backdrop close={this.notPurchasing} show={this.state.purchase}>
            <Module show={this.state.purchase}>{summary}</Module>
          </Backdrop>
        }
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, instance);
