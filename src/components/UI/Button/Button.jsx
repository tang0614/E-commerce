import React from "react";
import Classes from "./Button.module.css";
const Button = ({ onClick, disable, children, btnType }) => {
  return (
    <button
      className={[Classes.Button, Classes[btnType]].join(" ")}
      onClick={onClick}
      disable={disable}
    >
      {children}
    </button>
  );
};

export default Button;
