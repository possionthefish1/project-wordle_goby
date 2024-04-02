import React from 'react';

import Input from '../Input';
import WrongGuesses from '../WrongGuesses';
import Banner from '../Banner';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import { NUM_OF_GUESSES_ALLOWED as maxTry } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [oldGuesses, setOldGuesses] = React.useState([]);
  // 'playing' state here won, lose (banner)
  const [gameState, setGameState] = React.useState('playing');

  /*   const allCounts = oldGuesses.length;
  if (allCounts >= maxTry) {
    const nextGameState = 'lose';
    setGameState(nextGameState);
  } */

  const handleAddGuess = (value) => {
    const newOld = {
      key: crypto.randomUUID(),
      value,
    };
    const nextOldGuesses = [...oldGuesses, newOld];
    setOldGuesses(nextOldGuesses);
  };

  const handleGameOver = (gameResult = 'lose') => {
    const nextGameState = gameResult;
    setGameState(nextGameState);
  };

  /* if (oldGuesses.length === 3 && gameState === 'playing') {
    handleGameOver('lose');
  } */

  React.useEffect(() => {
    if (oldGuesses.length === maxTry && gameState === 'playing') {
      handleGameOver('lose');
    }
  }, [oldGuesses, gameState]);

  return (
    <>
      <WrongGuesses oldGuesses={oldGuesses} answer={answer} max={maxTry} />
      <Input
        gameState={gameState}
        handleSubmit={handleAddGuess}
        handleCheck={handleGameOver}
        answer={answer}
      />
      {gameState === 'lose' ? (
        <Banner mood='sad' />
      ) : gameState === 'win' ? (
        <Banner mood='happy' oldGuesses={oldGuesses} />
      ) : undefined}
    </>
  );
}

export default Game;
