import React from "react";
import "./Gryffindor.scss";
import gryffindorSigil from "../../assets/gryffindor-sigil.png"
import myResult from "../../result.json";

export default function Gryffindor() {
    var gryffindor = myResult[0];

    function myLog() {
        console.log(gryffindor);
    }
    myLog();

    return (
      <div className="result">
        <h1>You are in {gryffindor.name}!</h1>
        <img src={gryffindorSigil} alt="Gryffindor's logo" />
        <p>Animal: {gryffindor.animal}</p>
        <p>Element: {gryffindor.element}</p>
        <p>Colour: {gryffindor.colour}</p>
        <p>Founder: {gryffindor.founder}</p>
        <p>Ghost: {gryffindor.ghost}</p>
        <p>Traits: {gryffindor.traits}</p>
      </div>
    );
}