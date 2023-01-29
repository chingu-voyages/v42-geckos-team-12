/* eslint-disable */

import "./App.css";
import { React } from "react";
import { Routes, Route, Link } from "react-router-dom";

import LandingPage from "./container/LandingPage/LandingPage";
import Quiz from "./container/Quiz/Quiz";

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
