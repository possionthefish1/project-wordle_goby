import React from 'react';

function Banner({ oldGuesses, mood = 'happy' }) {
  return (
    <div className={`${mood} banner`}>
      {mood === 'happy' ? (
        <p>
          <strong>Congratulations!</strong> You got it in{' '}
          <strong>{oldGuesses.length} guesses</strong>
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>LEARN</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
