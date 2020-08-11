import React from "react";
import Module from "../../UI/Model/Module";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Button from "../../UI/Button/Button";
const Summary = ({
  ingredients,
  totalPrice,
  purchase,
  notPurchasing,
  submitBill,
}) => {
  const ingredientSummary = Object.keys(ingredients).map((el) => {
    return (
      <li key={el}>
        {<span style={{ textTransform: "capitalize" }}>{el}</span>}:
        {ingredients[el]}
      </li>
    );
  });
  return (
    <Backdrop close={notPurchasing} show={purchase}>
      <Module show={purchase}>
        <h2>{"Your Order"}</h2>
        <h3>{"Delicious ingredients inside this burger"}</h3>
        <ul>{ingredientSummary}</ul>
        <h3>{`Total Price : $ ${totalPrice}`}</h3>
        <p>{"Continue to checkout?"}</p>

        <Button onClick={submitBill}>Continue</Button>
        <Button onClick={notPurchasing}>Cancel</Button>
      </Module>
    </Backdrop>
  );
};

export default Summary;