import React, { useContext } from "react";
import { Context } from "./context";
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import Buttons from "./components/Buttons";
import Button from "./components/Button";

const btnValues = {
  "/": { type: "operator", class: "op-div" },
  "*": { type: "operator", class: "op-mul" },
  "+": { type: "operator", class: "op-add" },
  "-": { type: "operator", class: "op-sub" },
  0: { type: "number", class: "digit-0" },
  1: { type: "number", class: "digit-1" },
  2: { type: "number", class: "digit-2" },
  3: { type: "number", class: "digit-2" },
  4: { type: "number", class: "digit-4" },
  5: { type: "number", class: "digit-5" },
  6: { type: "number", class: "digit-6" },
  7: { type: "number", class: "digit-7" },
  8: { type: "number", class: "digit-8" },
  9: { type: "number", class: "digit-9" },
  C: { type: "clear", class: "clear" },
  "=": { type: "equal", class: "eq" },
};

function App() {
  const { calc } = useContext(Context);
  return (
    <div className="App">
      <Wrapper>
        <Screen value={calc?.num ? calc?.num : calc?.res} />
        <Buttons>
          {Object.entries(btnValues).map(([key, values]) => (
            <Button
              key={key}
              value={key}
              className={values.class}
              type={values.type}
            />
          ))}
        </Buttons>
      </Wrapper>
    </div>
  );
}

export default App;
