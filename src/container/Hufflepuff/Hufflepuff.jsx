import React from 'react';

import './Hufflepuff.scss';
import { images } from '../../constants';
import myResult from '../../result.json';
import Result from '../Result/Result';

export default function Hufflepuff() {
  var hufflepuff = myResult[3];

  return (
    <div>
      <img
        src={images.hufflepuffSigil}
        alt="Hufflepuff's house sigil with a badger on a yellow background"
      />
      <Result hogwartsHouse={hufflepuff} />
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
