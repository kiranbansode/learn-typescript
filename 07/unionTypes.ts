let age: number | string = 21;
age += 23;
age = '24';

type Point = {
	x: number;
	y: number;
};

type Loc = {
	lat: number;
	long: number;
};

let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.334 };

function printAge(age: number | string) {
	console.log(`Your are ${age} years old`);
}

printAge(23);
printAge('87');

function calculateTax(price: number | string, tax: number) {
	if (typeof price === 'string') {
		price = parseFloat(price.replace('$', ''));
	}
	return price * tax;
}

console.log(calculateTax(45, 0.7));
console.log(calculateTax('$45', 0.7));

// const nums: number[] = [1, 2, 3, 4];
const stuffs: (number | string | boolean)[] = [1, 2, 3, 4, true, 'word'];

const coords: (Point | Loc)[] = [];
coords.push({ lat: 321.213, long: 23.334 });
coords.push({ x: 1, y: 34 });
