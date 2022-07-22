"use strict";
// const nums: number[] = []
// const nums: Array<number> = [];
// const colors: Array<string> = [];
// const inputEl = document.querySelector<HTMLInputElement>('#username')!;
// console.log(inputEl);
// inputEl.value = 'Hacked!';
// const btn = document.querySelector<HTMLButtonElement>('.btn')!;
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
function identity(item) {
    return item;
}
// identity<number>(7);
// identity<string>('hello');
// identity<Cat>({ name: 'Rocky', breed: 'African' });
function getRandomElement(list) {
    var randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
console.log(getRandomElement(['a', 'b', 'c']));
console.log(getRandomElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
