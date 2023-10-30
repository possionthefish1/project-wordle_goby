import React from 'react';

import { checkGuess } from '../../game-helpers.js';
import { range } from '../../utils.js';

function Cell({ letter, status }) {
	const className = status ? `cell ${status}` : `cell`;
	return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
	const result = checkGuess(value, answer);

	return (
		<p className='guess'>
			{range(5).map((num) => (
				<Cell
					key={num}
					letter={result?.[num].letter}
					status={result?.[num].status}
				/>
			))}
		</p>
	);
}

export default Guess;
