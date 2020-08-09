import React from "react";
import classes from "./BuildControl.module.css";
import Button from "../../../UI/Button/Button";
const BuildControl = ({ label, addIngredient, removeIngredient, disabled }) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <Button onClick={removeIngredient} disabled={disabled}>
        {"Less"}
      </Button>
      <Button onClick={addIngredient}>{"More"}</Button>
    </div>
  );
};

export default BuildControl;
