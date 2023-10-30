import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';
import { WORDS } from '../../data';
import { sample } from '../../utils';

import GameOverBanner from '../GameOverBanner/index.js';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	// running || won || lost
	const [gamestate, setGameState] = React.useState('running');
	const [guesses, setGuesses] = React.useState([]);

	function handleSubmitGuess(tentativeGuess) {
		const nextGuesses = [...guesses, tentativeGuess];
		setGuesses(nextGuesses);

		if (tentativeGuess.toUpperCase() === answer) {
			setGameState('won');
		} else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
			setGameState('lost');
		}
	}

	return (
		<>
			<GuessResults guesses={guesses} answer={answer} />
			<GuessInput
				gamestate={gamestate}
				handleSubmitGuess={handleSubmitGuess}
				answer={answer}
			/>
			{gamestate !== 'running' && (
				<GameOverBanner
					numOfGuesses={guesses.length}
					gameState={gamestate}
					answer={answer}
				/>
			)}
		</>
	);
}

export default Game;
