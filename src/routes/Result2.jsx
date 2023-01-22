import axios from "axios";
import React, { useState, useEffect } from "react";

function Result2() {
  const [dorms, setDorms] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://raw.githubusercontent.com/chingu-voyages/v42-geckos-team-12/main/src/api/result.json`
      )
      .then((result) => {
        setDorms(result.data);
        console.log(dorms, ">>>>>");
      });
  });

  return (
    <div>
      <h1>You are...</h1>

      <div>
        {dorms.map((dorm, index) => {
          return (
            <ul key={index}>
              <li>Name: {dorm.name}</li>
              <li>Traits: {dorm.traits}</li>
              <li>Founder: {dorm.founder}</li>
              <li>Animal: {dorm.animal}</li>
              <li>Colour: {dorm.colour}</li>
              <li>Element: {dorm.element}</li>
              <li>Ghost: {dorm.ghost}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default Result2;
