import React, { Component } from "react";
import Aux from "../../hoc/aux";
import classes from "./layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar";
import Sidedrawer from "../../components/Navigation/Sidedrawer/Sidedrawer";

class Layout extends Component {
  state = {
    showSidedrawer: false,
  };

  sideDrawerHandler = () => {
    this.setState((preState) => {
      return { showSidedrawer: !preState.showSidedrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar sideDrawerHandler={this.sideDrawerHandler} />
        <Sidedrawer
          show={this.state.showSidedrawer}
          onClick={this.sideDrawerHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
