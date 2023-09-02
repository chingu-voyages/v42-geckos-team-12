import React from 'react';

import './Slytherin.scss';
import { images } from '../../constants';
import myResult from '../../result.json';
import Result from '../Result/Result';

export default function Slytherin() {
  var slytherin = myResult[1];

  return (
    <div>
      <img
        src={images.slytherinSigil}
        alt="Slytherin's house sigil with a snake on a green background"
      />
      <Result hogwartsHouse={slytherin} />
      <div className="Quiz__radioButtonContainer">
        <button
          className="Quiz__radioButton"
          onClick={() => window.location.reload(true)}
          style={{ fontFamily: 'Merriweather, serif' }}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
