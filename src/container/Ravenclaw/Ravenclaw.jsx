import React from "react";

import "./Ravenclaw.scss";
import { images } from "../../constants"
import myResult from "../../result.json";
import Result from "../Result/Result";

export default function Ravenclaw() {
    var ravenclaw = myResult[2];

    return (
      <div>
        <img src={ images.ravenclawSigil } alt="Ravenclaw's house sigil with a raven on a blue background" />
        <Result
          hogwartsHouse={ ravenclaw }
        />
        <div className="Quiz__radioButtonContainer">
          <button
            className="Quiz__radioButton"
            onClick={() => window.location.reload(true)}
          >Try again</button>
        </div>
      </div>
    ); 
}