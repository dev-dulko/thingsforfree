import React from "react";
import { ReactComponent as ReactDecoration } from "../../../assets/Decoration.svg";

function Title() {
  return (
    <div className="title">
      <h2>Zacznij pomagać!</h2>
      <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
      <div className="title__decoration">
        <ReactDecoration />
      </div>
    </div>
  );
}

export default Title;
