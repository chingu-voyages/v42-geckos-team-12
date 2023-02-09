import React from "react";

import "./Gryffindor.scss";
import { images } from "../../constants"
import myResult from "../../result.json";
import Result from "../Result/Result";

export default function Gryffindor() {
    var gryffindor = myResult[0];

    return (
      <div>
        <img src={ images.gryffindorSigil } alt="Gryffindor's house sigil with a roaring lion on a red background" />
        <Result
          hogwartsHouse={ gryffindor }
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