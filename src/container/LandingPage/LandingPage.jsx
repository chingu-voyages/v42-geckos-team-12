import React from "react";
import { Link } from "react-router-dom";

import Footer from '../Footer/Footer.jsx';
import "./LandingPage.scss";

export default function LandingPage() {
  return (
    <div className="LandingPage__container">
      <h1>Hogwarts House Mysteries</h1>
      <p>
        Which house would you belong to? You know we can't all be in Ravenclaw, right?
      </p>
      <Link to={`/quiz`}>
        <button
          className="LandingPage__button LandingPage__buton-fade"
        >
          START THE QUIZ
        </button>
      </Link>
      <Footer></Footer>
    </div>
  );
}
