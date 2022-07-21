"use strict";
class Player {
    constructor(first, last) {
        this.score = 0;
        this.first = first;
        this.last = last;
        // this.secretMethod();
    }
    secretMethod() {
        console.log('Secret Method');
    }
}
const elton = new Player('Elton', 'Steele');
// elton.score = 42;
// elton.first = 'Kiran';
// elton.secretMethod();
