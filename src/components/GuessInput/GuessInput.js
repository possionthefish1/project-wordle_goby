import React from 'react';

function GuessInput({ gamestate, handleSubmitGuess, answer }) {
	const [tentativeGuess, setTentativeGuess] = React.useState('');

	function handleSubmit(event) {
		event.preventDefault();
		handleSubmitGuess(tentativeGuess);
		setTentativeGuess('');
	}

	return (
		<form onSubmit={handleSubmit} className='guess-input-wrapper'>
			<label htmlFor='guess-input'>Enter guess:</label>
			<input
				required
				disabled={gamestate !== 'running'}
				minLength={5}
				maxLength={5}
				pattern='[a-zA-Z]{5}'
				title='5 letter English word'
				value={tentativeGuess}
				onChange={(event) => {
					const nextGuess = event.target.value.toUpperCase();
					setTentativeGuess(nextGuess);
				}}
				id='guess-input'
				type='text'
			/>
		</form>
	);
}

export default GuessInput;
