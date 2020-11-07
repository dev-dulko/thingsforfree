import React from "react";
import { ReactComponent as ReactDecoration } from "../../../assets/Decoration.svg";
import blouseIcon from "../../../assets/Icon-1.svg";
import bagIcon from "../../../assets/Icon-2.svg";
import magnifierIcon from "../../../assets/Icon-3.svg";
import loopIcon from "../../../assets/Icon-4.svg";

function SimplySteps() {
  return (
    <div className="simplySteps">
      <h2>Wystarczą 4 proste kroki</h2>
      <ReactDecoration />
      <div className="simplySteps__icon">
        <div>
          <img src={blouseIcon} />
          <p>Wybierz rzeczy</p>
          <p>Ubrania, zabawki, sprzęt i inne</p>
        </div>
        <div>
          <img src={bagIcon} />
          <p>Spakuj je</p>
          <p>skorzystaj z worków na śmieci</p>
        </div>
        <div>
          <img src={magnifierIcon} />
          <p>
            Zdecyduj komu <br />
            chcesz pomóc
          </p>
          <p>wybierz zaufane miejsce</p>
        </div>
        <div>
          <img src={loopIcon} />
          <p>Zamów kuriera</p>
          <p>kurier przyjedzie w dogodnym terminie</p>
        </div>
      </div>
    </div>
  );
}

export default SimplySteps;
