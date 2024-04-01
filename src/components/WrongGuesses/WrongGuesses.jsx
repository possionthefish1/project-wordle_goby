import React from 'react';

function WrongGuesses({ oldGuesses }) {
  return (
    <div class='guess-results'>
      {oldGuesses.map((oldGuess) => (
        <p key={oldGuess.key} class='guess'>
          {oldGuess.value}
        </p>
      ))}
    </div>
  );
}

export default WrongGuesses;
