class Player {
	#score = 0;
	numLives = 10;

	constructor(first, last) {
		this.first = first;
		this.last = last;
		this.#secret();
	}

	get fllName() {
		return `${this.first} ${this.last}`;
	}

	get score() {
		return this.#score;
	}

	getScore() {
		return this.#score;
	}

	updateScore(newScore) {
		return (this.#score = newScore);
	}

	taunt() {
		console.log('HOORAH!');
	}

	loseLife() {
		this.numLives -= 1;
	}

	#secret() {
		console.log('Secrete');
	}
}

const player1 = new Player('blue', 'steel');
// player1.taunt();
// console.log(player1.first);
// console.log(player1.last);
console.log(player1);
console.log(player1.loseLife());
console.log(player1);
console.log(player1.getScore());
console.log(player1.updateScore(28));
console.log(player1.getScore());
// console.log(player1.#secret);

console.log(player1.fllName);
console.log(player1.score);
// const player2 = new Player('charlie', 'brown');
// player2.taunt();
// console.log(player2);
