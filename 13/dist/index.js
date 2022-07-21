"use strict";
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
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    secretMethod() {
        console.log('Secret Method');
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore <= 0) {
            throw new Error('Score cannot be negative');
        }
        this._score = newScore;
    }
}
const elton = new Player('Elton', 'Steele', 100);
console.log(elton.fullName);
elton.fullName;
elton.score = 99;
console.log(elton.score);
