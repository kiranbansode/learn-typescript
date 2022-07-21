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
    constructor(first, last, score) {
        this.first = first;
        this.last = last;
        this.score = score;
    }
    secretMethod() {
        console.log('Secret Method');
    }
}
const elton = new Player('Elton', 'Steele', 100);
