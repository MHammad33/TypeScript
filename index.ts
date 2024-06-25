// ! Unions

// let score: number | string = 33;

// score = 44;
// score = "55"; // No error
// // score = false; // error

// ? Type Aliases for Union
// type User = {
// 	name: string;
// 	id: number;
// };

// type Admin = {
// 	username: string;
// 	id: number;
// };

// let Hammad: User | Admin = { name: "Hammad", id: 22 };
// Hammad = { username: "Hammad", id: 22 };

// ? Interesting error
// function getUser(id: number | string): void {
// 	// id.toLowercase(); -- error
// 	if (typeof id === "string") {
// 		id.toLowerCase();
// 	}
// }
// getUser(1);
// getUser("Hammad");

// ? Union Types in Arrays
// const data: number[] | string[] = [1, 2, 3, "4"]; // Not allowed
// * Correct Syntax
// const data: (number | string)[] = [1, 2, 3, "4"];

// ? Constant Assignments
let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "middle";
