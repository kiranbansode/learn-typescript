class Player {
	public readonly first: string;
	public readonly last: string;
	public score = 0;

	constructor(first: string, last: string) {
		this.first = first;
		this.last = last;
	}
}

const elton = new Player('Elton', 'Steele');
// elton.score = 42;
// elton.first = 'Kiran';
