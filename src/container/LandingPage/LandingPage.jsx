import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

import './LandingPage.scss';

export default function LandingPage() {
  return (
    <div className="LandingPage__container">
      <Link to={`/`}>
        <img
          src="https://user-images.githubusercontent.com/74983536/128005620-f7f44ba5-14d7-4329-abe4-0da9c93137e1.png"
          alt="Harry Potter Logo"
        ></img>
      </Link>

      <div
        className="LandingPage__secondTitle"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        🧙🏻‍♀️Welcome to Hogwarts House Test 🪄
      </div>
      <div
        className="LandingPage__context"
        style={{ fontFamily: 'Merriweather, serif' }}
      >
        <p>Which dorm would you belong to?</p>
        <p>You know we can't all be in Ravenclaw, right?</p>
      </div>

      <Link to={`/quiz`}>
        <button
          className="LandingPage__button LandingPage__buton-fade"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          START
        </button>
      </Link>
      <Footer />
    </div>
  );
}
