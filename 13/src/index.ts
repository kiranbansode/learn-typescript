class Player {
	first: string;
	last: string;
	score = 0;

	constructor(first: string, last: string) {
		this.first = first;
		this.last = last;
	}
}

const elton = new Player('Elton', 'Steele');
elton.score = 42;
