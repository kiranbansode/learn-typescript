// const person: {
// 	name: string;
// 	age: number;
// } = {
const person: {
	name: string;
	age: number;
	hobbies: string[];
	role: [number, string]; // Tuple
} = {
	name: "Kiran",
	age: 26,
	hobbies: ["Sports", "Cooking"],
	role: [2, "author"],
};

// person.role.push("admin"); // push() is exception
// person.role[1] = 10;
// person.role = [0, "admin", "user"];

let favouriteActivities: string[];
favouriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
	// console.log(hobby.map()); // ERROR
}
