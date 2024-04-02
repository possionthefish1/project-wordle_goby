import React from 'react';

function Input({ handleSubmit }) {
  const [guess, setGuess] = React.useState('');

  return (
    <form
      className='guess-input-wrapper'
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(guess);
        setGuess('');
      }}
    >
      <label htmlFor='guess'>Enter guess:</label>
      <input
        className='focus:ring-8'
        type='text'
        id='guess'
        required={true}
        value={guess}
        maxLength={5}
        pattern={'[a-zA-Z]{5}'}
        title={'5 letters guess only, no numbers or special character allowed'}
        onChange={(e) => {
          const nextGuess = e.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default Input;
