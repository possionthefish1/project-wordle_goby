import React from 'react';
import Input from '../Input';
import WrongGuesses from '../WrongGuesses/WrongGuesses';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [oldGuesses, setOldGuesses] = React.useState([
    { key: crypto.randomUUID(), value: 'APPLE' },
    { key: crypto.randomUUID(), value: 'REACT' },
  ]);

  const handleAddGuess = (value) => {
    const newOld = {
      key: crypto.randomUUID(),
      value,
    };
    setOldGuesses([...oldGuesses, newOld]);
  };

  return (
    <>
      <WrongGuesses oldGuesses={oldGuesses} />
      <Input handleSubmit={handleAddGuess} />
    </>
  );
}

export default Game;
