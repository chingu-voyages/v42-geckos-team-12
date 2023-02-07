import React from 'react'
import "./Result.scss";
import myResult from "../../result.json";

const gryffindor = myResult[0];
const slytherin = myResult[1];
const ravenclaw = myResult[2];
const hufflepuff = myResult[3];

function House({ hogwartsHouse }) {
  return (
    <div>
      <h1>You're in {hogwartsHouse.name}!</h1>
      <p>Animal: {hogwartsHouse.animal}</p>
      <p>Element: {hogwartsHouse.element}</p>
      <p>Colour: {hogwartsHouse.colour}</p>
      <p>Traits: {hogwartsHouse.traits}</p>
      <p>Founder: {hogwartsHouse.founder}</p>
      <p>Head: {hogwartsHouse.head}</p>
      <p>Ghost: {hogwartsHouse.ghost}</p>
    </div>
  )
}

export default function Result() {
  return (
    <div>
      <House
        hogwartsHouse={gryffindor}
      />
    </div>
  );
}
