import React from 'react';

function GameOverBanner({ numOfGuesses, gameState, answer }) {
	if (gameState === 'won') {
		return (
			<div className='happy banner'>
				<p>
					<strong>Congratulations!</strong> Got it in{' '}
					<strong>
						{' '}
						{numOfGuesses === 1
							? 'first guess only!'
							: numOfGuesses + ' guesses'}
					</strong>
					.
				</p>
			</div>
		);
	} else if (gameState === 'lost') {
		return (
			<div className='sad banner'>
				<p>
					Sorry, the correct answer is <strong>{answer}</strong>.
				</p>
			</div>
		);
	}
	return;
}

export default GameOverBanner;
