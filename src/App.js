import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import axios from "axios";

import Result from ".././src/routes/Result";

function App() {
  return (
    <div>
      <Result />
    </div>
  );
}

export default App;
