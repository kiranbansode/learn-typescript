// function square(num: number): number {
// 	return num * num;
// }

// function greet(person: string) {
// 	return `Hi there, ${person}`;
// }

const doSomething = (person: string, age: number, isFunny: boolean) => {};

square(3);
greet("Tonya Harding");
doSomething("Chicken", 78, true);

function greet(person: string = "stranger"): string {
	return `Hi there, ${person}`;
}

function square(num: number): number {
	return num * num;
}

const add = (x: number, y: number): number => {
	return x + y;
};

// function random(num: number) {
// 	if (Math.random() < 0.5) {
// 		return num.toString();
// 	}
// 	return num;
// }
