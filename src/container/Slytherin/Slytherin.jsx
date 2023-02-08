import React from "react";
import "./Slytherin.scss";
import slytherinSigil from "../../assets/slytherin-sigil.png"
import myResult from "../../result.json";
import Result from "../Result/Result";

export default function Slytherin() {
    var slytherin = myResult[1];

    return (
      <div>
        <img src={slytherinSigil} alt="Slytherin's house sigil with a snake on a green background" />
        <Result
          hogwartsHouse={slytherin}
        />
      </div>
    ); 
}