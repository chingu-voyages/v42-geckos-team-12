

import React from "react";
import "./Gryffindor.scss";
import gryffindorSigil from "../../assets/gryffindor-sigil.png"
import myResult from "../../result.json";
import Result from "../Result/Result";

export default function Gryffindor() {
    var gryffindor = myResult[0];

    return (
      <div>
        <img src={gryffindorSigil} alt="Gryffindor's house sigil with a roaring lion on a red background" />
        <Result
          hogwartsHouse={gryffindor}
        />
      </div>
    ); 
}