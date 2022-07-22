// const nums: number[] = []
// const nums: Array<number> = [];
// const colors: Array<string> = [];

// const inputEl = document.querySelector<HTMLInputElement>('#username')!;
// console.log(inputEl);
// inputEl.value = 'Hacked!';

const btn = document.querySelector<HTMLButtonElement>('.btn')!;

function numberIdentity(item: number): number {
	return item;
}

function stringIdentity(item: number): number {
	return item;
}

function booleanIdentity(item: boolean): boolean {
	return item;
}

// function identity(item: any): any {
// 	return item;
// }

interface Cat {
	name: string;
	breed: string;
}

function identity<T>(item: T): T {
	return item;
}

// identity<number>(7);
// identity<string>('hello');
// identity<Cat>({ name: 'Rocky', breed: 'African' });

function getRandomElement<T>(list: T[]): T {
	const randIdx = Math.floor(Math.random() * list.length);
	return list[randIdx];
}

console.log(getRandomElement<string>(['a', 'b', 'c']));
console.log(getRandomElement<number>([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

getRandomElement(['a', 'v', 'asd']);
getRandomElement([1, 2, 3, 4, 5]);

// [4,5,6,7]
// [true, false, true]
// [{},{},{}]

function merge<T, U>(object: T, object2: U) {
	return {
		...object,
		...object2,
	};
}

const comboObj = merge({ name: 'Colt' }, { pets: ['blue', 'elton'] });

// merge<{ name: string }, { pets: string[] }>(
// 	{ name: 'Colt' },
// 	{ pets: ['blue', 'elton'] }
// );
