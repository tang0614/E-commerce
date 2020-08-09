import React from "react";

const Button = ({ onClick, disable, children }) => {
  return (
    <button onClick={onClick} disable={disable}>
      {children}
    </button>
  );
};

export default Button;
