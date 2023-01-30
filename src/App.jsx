/* eslint-disable */

import { React } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { LandingPage, Quiz } from "./container"
import "./App.css";

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
