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
	sayHi: (name: string) => string;
	// sayHi(name): string;
}

const thomas: Person = {
	id: 21837,
	first: 'Thomas',
	last: 'Hardy',
	// nickname: 'Hardy',
	sayHi: (name) => {
		return 'Hello!';
	},
};

thomas.first = 'Specter';
// thomas.id = 123; // NOT Allowed

interface Product {
	name: string;
	price: number;
	applyDiscount(discount: number): number;
}

const shoes: Product = {
	name: 'Blue Suede Shoes',
	price: 100,
	applyDiscount(discount) {
		const newPrice = this.price * (1 - discount);
		this.price = newPrice;
		return this.price;
	},
};

console.log(shoes.applyDiscount(0.4));

interface Dog {
	name: string;
	age: number;
}

interface Dog {
	breed: string;
	bark(): string;
}

const elton: Dog = {
	name: 'Elton',
	age: 0.5,
	breed: 'Australian Shepherd',
	bark() {
		return 'Woof Woof!';
	},
};
