import React from "react";
import "./Ravenclaw.scss";
import ravenclawSigil from "../../assets/ravenclaw-sigil.png"
import myResult from "../../result.json";
import Result from "../Result/Result";

export default function Ravenclaw() {
    var ravenclaw = myResult[2];

    return (
      <div>
        <img src={ravenclawSigil} alt="Ravenclaw's house sigil with a raven on a blue background" />
        <Result
          hogwartsHouse={ravenclaw}
        />
      </div>
    ); 
}