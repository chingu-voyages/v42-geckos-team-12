/* eslint-disable */

import { React } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Gryffindor, LandingPage, Quiz, Result } from "./container"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/gryffindor" element={<Gryffindor />}></Route>
        <Route path="/result" element={<Result />}></Route>
      </Routes>
    </div>
  );
}

export default App;
