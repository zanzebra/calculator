import React from "react";
import { Textfit } from "react-textfit";
import ScreenComponent from "./style";

const Screen = ({ value }) => {
  return (
    <ScreenComponent>
      <Textfit className="screen" mode="single" max={70}>
        {value}
      </Textfit>
    </ScreenComponent>
  );
};

export default Screen;
