import React, { Component } from 'react'
import "./Result.scss";
import myResult from "../../result.json";

const gryffindor = myResult[0];
const slytherin = myResult[1];
const ravenclaw = myResult[2];
const hufflepuff = myResult[3];

function logMe() {
  console.log(myResult);
}
logMe();

class Result extends Component {

  state  = {
    myHouse: [gryffindor, slytherin, ravenclaw, hufflepuff],
  }

  render() {
    return(
      <div>
        <h1>Your house is {this.state.myHouse[1].name}!</h1>
      </div>
    )
  }
}

export default Result