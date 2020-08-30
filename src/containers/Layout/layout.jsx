import React, { Component } from "react";
import Aux from "../../hoc/aux";
import classes from "./layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar";
import Sidedrawer from "../../components/Navigation/Sidedrawer/Sidedrawer";
import { connect } from "react-redux";
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
    let links = [];
    if (this.props.isAuthenticated) {
      links = [
        { name: "BurgerBuilder", address: "/" },
        { name: "Checkout", address: "/orders" },
        { name: "Logout", address: "/logout" },
      ];
    } else {
      links = [
        { name: "BurgerBuilder", address: "/" },
        { name: "SignUp/In", address: "/auth" },
      ];
    }
    return (
      <Aux>
        <Toolbar links={links} sideDrawerHandler={this.sideDrawerHandler} />
        <Sidedrawer
          links={links}
          show={this.state.showSidedrawer}
          onClick={this.sideDrawerHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token != null,
  };
};
export default connect(mapStateToProps)(Layout);
