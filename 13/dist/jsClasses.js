class Player {
	static description = 'Player In our Game';
	#score = 0;
	#numLives = 10;

	constructor(first, last) {
		this.first = first;
		this.last = last;
		this.#secret();
	}

	static randomPlayer() {
		return new Player('Andy', 'Sam');
	}

	get fllName() {
		return `${this.first} ${this.last}`;
	}

	set fullName(newName) {
		const [first, last] = newName.split(' ');
		this.first = first;
		this.last = last;
	}

	get score() {
		return this.#score;
	}

	set score(newScore) {
		if (newScore < 0) {
			throw new Error('Score must be positive!');
		}
		this.#score = newScore;
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

class AdminPlayer extends Player {
	constructor(first, last, powers) {
		super(first, last);
		this.powers = powers;
	}

	isAdmin = true;
}

const admin = new AdminPlayer('admin', 'mAdmin', ['delete', 'restore world']);
console.log(admin);
// const player1 = new Player('blue', 'steel');
// console.log(player1);

// player1.taunt();
// console.log(player1.first);
// console.log(player1.last);
// console.log(player1);
// console.log(player1.loseLife());
// console.log(player1);
// console.log(player1.getScore());
// console.log(player1.updateScore(28));
// console.log(player1.getScore());
// console.log(player1.#secret);

// console.log(player1.fllName);
// console.log(player1.score);
// player1.score = -12387219;
// player1.score = 3024;
// console.log(player1.score);
// const player2 = new Player('charlie', 'brown');
// player2.taunt();
// console.log(player2);

// console.log(player1.fullName);
// player1.fullName = 'Any Adams';
// console.log(player1.fllName);
// player1.fullName = 'Kiran Bansode';
// console.log(player1.fllName);
// console.log(player1.first);
