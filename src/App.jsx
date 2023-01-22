/* eslint-disable */

import "./App.css";
import { React, useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import LandingPage from "./container/LandingPage/LandingPage";
import Quiz from "./routes/Quiz";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
      </Routes>
    </div>
  );
}

export default App;
