import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Board({ guess, answer }) {
  console.log('answer to Board', answer);
  const result = checkGuess(guess?.value, answer);
  console.log('result to Board', result);

  return (
    <p className='guess'>
      {range(5).map((num) => (
        <span
          key={num}
          className={result ? `${result[num].status} cell` : 'cell'}
        >
          {/* {guess ? guess.value[num] : undefined} */}
          {result ? result[num].letter : undefined}
        </span>
      ))}
    </p>
  );
}

export default Board;
