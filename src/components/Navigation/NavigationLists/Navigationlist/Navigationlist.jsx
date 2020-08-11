import React from "react";
import classes from "./Navigationlist.module.css";
const Navigationlist = (props) => {
  return (
    <li className={classes.Navigationlist}>
      <a className={props.active ? classes.active : null}>{props.name}</a>
    </li>
  );
};

export default Navigationlist;
