import React from 'react'
import "./Result.scss";

export default function Result({ hogwartsHouse }) {
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
  );
}
