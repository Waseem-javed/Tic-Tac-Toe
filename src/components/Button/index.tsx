import React from "react";
import { IButtonProps } from "./types";

const Button: React.FC<IButtonProps> = ({ value, handleClick }) => {
  return (
    <button className="button mb-4 is-light is-fullwidth" onClick={handleClick}>
      <strong>{value}</strong>
    </button>
  );
};

export default Button;
