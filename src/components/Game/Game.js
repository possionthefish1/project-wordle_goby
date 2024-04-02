import React from 'react';

import Input from '../Input';
import WrongGuesses from '../WrongGuesses';
import Banner from '../Banner';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [oldGuesses, setOldGuesses] = React.useState([]);
  // 'playing' state here won, lose (banner)
  const [gameState, setGameState] = React.useState('playing');

  const handleAddGuess = (value) => {
    const newOld = {
      key: crypto.randomUUID(),
      value,
    };
    setOldGuesses([...oldGuesses, newOld]);
  };

  return (
    <>
      <WrongGuesses oldGuesses={oldGuesses} answer={answer} />
      <Input handleSubmit={handleAddGuess} />
      {gameState !== 'playing' ? <Banner /> : undefined}
    </>
  );
}

export default Game;
