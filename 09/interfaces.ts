// type Point = {
// 	x: number;
// 	y: number;
// };

// const pt: Point = {x: 213. y: 12}

interface Point {
	x: number;
	y: number;
}

const pt: Point = { x: 123, y: 1234 };

interface Person {
	readonly id: number;
	first: string;
	last: string;
	nickname?: string;
}

const thomas: Person = {
	id: 21837,
	first: 'Thomas',
	last: 'Hardy',
	// nickname: 'Hardy',
};

thomas.first = 'Specter';
// thomas.id = 123; // NOT Allowed
