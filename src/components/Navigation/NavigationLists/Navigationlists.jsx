import React from "react";
import Navigationlist from "./Navigationlist/Navigationlist";
import classes from "./Navigationlists.module.css";

const links = [
  { name: "BurgerBuilder", address: "/" },
  { name: "Checkout", address: "/" },
];
const Navigationlists = (props) => {
  const lists_dir =
    props.direction === "col" ? "Navigationlists__col" : "Navigationlists__row";

  return (
    <ul className={classes[lists_dir]}>
      {links.map((link, id) => {
        return (
          <Navigationlist
            key={id + link.name}
            name={link.name}
            address={link.address}
            direction={props.drection}
          />
        );
      })}
    </ul>
  );
};

export default Navigationlists;
