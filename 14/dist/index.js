"use strict";
// const nums: number[] = []
// const nums: Array<number> = [];
// const colors: Array<string> = [];
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// const inputEl = document.querySelector<HTMLInputElement>('#username')!;
// console.log(inputEl);
// inputEl.value = 'Hacked!';
var btn = document.querySelector('.btn');
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
getRandomElement(['a', 'v', 'asd']);
getRandomElement([1, 2, 3, 4, 5]);
// [4,5,6,7]
// [true, false, true]
// [{},{},{}]
function merge(object, object2) {
    return __assign(__assign({}, object), object2);
}
var comboObj = merge({ name: 'Colt' }, { pets: ['blue', 'elton'] });
console.log(merge({ name: 'Colt' }, { num: 9 }));
// function printDOubleLength<T extends Length>(thing: T): number {
// 	return thing.length * 2;
// }
function printDOubleLength(thing) {
    return thing.length * 2;
}
printDOubleLength('abc');
printDOubleLength(234);
function makeEmptyArray() {
    return [];
}
var nums = makeEmptyArray();
var bool = makeEmptyArray();
