function square(num: number) {
	return num * num;
}

// function greet(person: string) {
// 	return `Hi there, ${person}`;
// }

const doSomething = (person: string, age: number, isFunny: boolean) => {};

square(3);
greet("Tonya Harding");
doSomething("Chicken", 78, true);

function greet(person: string = "stranger") {
	return `Hi there, ${person}`;
}
