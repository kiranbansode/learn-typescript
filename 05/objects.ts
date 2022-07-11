function printName(person: { first: string; last: string }): void {
	console.log(`${person.first} ${person.last}`);
}

printName({ first: 'thomas', last: 'Jenkins' });

let coordinate: { x: number; y: number } = { x: 32, y: 2 };

function randomCoordinate(): { x: number; y: number } {
	return { x: Math.random(), y: Math.random() };
}
