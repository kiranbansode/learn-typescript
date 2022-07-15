// type Point = {
// 	x: number;
// 	y: number;
// };
var pt = { x: 123, y: 1234 };
var thomas = {
    id: 21837,
    first: 'Thomas',
    last: 'Hardy',
    // nickname: 'Hardy',
    sayHi: function (name) {
        return 'Hello!';
    },
};
thomas.first = 'Specter';
var shoes = {
    name: 'Blue Suede Shoes',
    price: 100,
    applyDiscount: function (discount) {
        var newPrice = this.price * (1 - discount);
        this.price = newPrice;
        return this.price;
    },
};
console.log(shoes.applyDiscount(0.4));
