import React, { useContext } from "react";
import { Context } from "../../context";
import ButtonComponent from "./style";

const Button = ({ className, value, type }) => {
  const {
    numClickHandler,
    resetClickHandler,
    signClickHandler,
    equalsClickHandler,
  } = useContext(Context);

  const handleClick =
    type === "operator"
      ? signClickHandler
      : type === "clear"
      ? resetClickHandler
      : type === "equal"
      ? equalsClickHandler
      : numClickHandler;
  type === "equal" && console.log(handleClick);
  return (
    <ButtonComponent>
      <button className={className} onClick={handleClick}>
        {value}
      </button>
    </ButtonComponent>
  );
};

export default Button;
