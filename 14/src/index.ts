// const nums: number[] = []
// const nums: Array<number> = [];
// const colors: Array<string> = [];

// const inputEl = document.querySelector<HTMLInputElement>('#username')!;
// console.log(inputEl);
// inputEl.value = 'Hacked!';

// const btn = document.querySelector<HTMLButtonElement>('.btn')!;

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
