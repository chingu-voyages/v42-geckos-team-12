import axios from "axios";
import React, { useState, useEffect } from "react";
import data from "../data";

function Result() {
  const [dorms, setDorms] = useState(data);

  console.log(dorms, "<<<<<<<<dorms");

  return (
    <div>
      <h1>호그와트</h1>

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

export default Result;
