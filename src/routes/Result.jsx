import axios from "axios";
import React, { useState, useEffect } from "react";

function Result() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://raw.githubusercontent.com/chingu-voyages/v42-geckos-team-12/main/src/api/result.json`
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch(() => {
        console.log("error");
      });
  });

  return (
    <div>
      <h1>hi</h1>
      {/* {results.map((result) => {
        return <h3></h3>;
      })} */}
    </div>
  );
}

export default Result;
