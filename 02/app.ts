// const person: {
// 	name: string;
// 	age: number;
// } = {
// const person: {
// 	name: string;
// 	age: number;
// 	hobbies: string[];
// 	role: [number, string]; // Tuple
// } = {
// 	name: "Kiran",
// 	age: 26,
// 	hobbies: ["Sports", "Cooking"],
// 	role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
	ADMIN = "ADMIN",
	READ_ONLY = 100,
	AUTHOR, // 3 - automatically assigned
}

const person = {
	name: "Kiran",
	age: 26,
	hobbies: ["Sports", "Cooking"],
	role: Role.ADMIN,
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

if (person.role === Role.AUTHOR) {
	console.log("is author");
}
