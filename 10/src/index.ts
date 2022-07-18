interface Chicken {
	breed: string;
	eggsPerWeek: number;
	name: string;
	age: number;
}

const norma: Chicken = {
	breed: 'Silky',
	eggsPerWeek: 4,
	name: 'Norma',
	age: 2,
};

const juniper: Chicken = {
	breed: 'Silky',
	eggsPerWeek: 4,
	name: 'Juniper',
	age: 1,
};

// function doThing(thing) {
// 	console.log(thing);
// }

let users: string[] | null = ['user1', 'user2'];
users = null;
