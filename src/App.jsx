/* eslint-disable */

import { React } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Gryffindor, Hufflepuff, LandingPage, Quiz, Ravenclaw, Result, Slytherin } from "./container"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/gryffindor" element={<Gryffindor />}></Route>
        <Route path="/slytherin" element={<Slytherin />}></Route>
        <Route path="/ravenclaw" element={<Ravenclaw />}></Route>
        <Route path="/hufflepuff" element={<Hufflepuff />}></Route>
        <Route path="/result" element={<Result />}></Route>
      </Routes>
    </div>
  );
}

export default App;
