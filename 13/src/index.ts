// class Player {
// 	public readonly first: string;
// 	public readonly last: string;
// 	private score = 0;

// 	constructor(first: string, last: string) {
// 		this.first = first;
// 		this.last = last;
// 		// this.secretMethod();
// 	}

// 	private secretMethod(): void {
// 		console.log('Secret Method');
// 	}
// }

// elton.score = 42;
// elton.first = 'Kiran';
// elton.secretMethod();

class Player {
	constructor(
		public first: string,
		public last: string,
		protected _score: number
	) {}

	private secretMethod(): void {
		console.log('Secret Method');
	}

	get fullName(): string {
		return `${this.first} ${this.last}`;
	}

	get score(): number {
		return this._score;
	}

	set score(newScore: number) {
		if (newScore <= 0) {
			throw new Error('Score cannot be negative');
		}

		this._score = newScore;
	}
}

class SuperPlayer extends Player {
	public isAdmin: boolean = true;
	maxScore() {
		this._score = 99999999;
	}
}

const elton = new Player('Elton', 'Steele', 100);
console.log(elton.fullName);
elton.fullName;
elton.score = 99;
console.log(elton.score);
