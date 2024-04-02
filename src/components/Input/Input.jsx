import React from 'react';

function Input({ handleSubmit, gameState, handleCheck, answer }) {
  const [guess, setGuess] = React.useState('');

  return (
    <form
      className={
        gameState === 'playing'
          ? 'guess-input-wrapper'
          : 'guess-input-wrapper disabled:opacity-0 text-red-500'
      }
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(guess);
        setGuess('');
        if (guess === answer) {
          handleCheck('win');
        }
      }}
    >
      <label htmlFor='guess'>
        {gameState === 'playing' ? 'Enter guess:' : 'Restart to  play again!'}
      </label>
      <input
        className='focus:ring-8'
        type='text'
        id='guess'
        required={true}
        value={guess}
        maxLength={5}
        pattern={'[a-zA-Z]{5}'}
        title={'5 letters guess only, no numbers or special character allowed'}
        disabled={gameState !== 'playing'}
        onChange={(e) => {
          const nextGuess = e.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default Input;
