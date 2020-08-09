import React from "react";
import Aux from "../../hoc/aux";
import classes from "./layout.module.css";

const Layout = (props) => {
  return (
    <Aux>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
