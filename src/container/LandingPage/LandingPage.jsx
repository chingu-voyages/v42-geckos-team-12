import React from "react";
import "./LandingPage.scss"

export default function LandingPage() {

    function clickButton() {
        console.log("This button REALLY works!!!");
    }

    return(
        <div className="LandingPage__container">
            <h1>Hogwarts House Mysteries</h1>
            <p>Which house would you belong to? You know we can't all be in Ravenclaw, right? ;-)</p>
            <button className="LandingPage__button LandingPage__buton-fade" onClick={clickButton}>START THE QUIZ</button>
        </div>
    );
}