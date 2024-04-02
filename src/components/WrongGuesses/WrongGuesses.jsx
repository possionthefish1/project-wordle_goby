import React from 'react';

import Board from '../Board';

// import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function WrongGuesses({ oldGuesses, answer, max }) {
  return (
    <div className='guess-results'>
      {range(max).map((num) => (
        <Board key={num} guess={oldGuesses[num]} answer={answer} />
      ))}
    </div>
  );
}

export default WrongGuesses;
