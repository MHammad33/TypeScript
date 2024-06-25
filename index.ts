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
// let seatAllotment: "aisle" | "middle" | "window";
// seatAllotment = "middle";

// ! Tuples
// const user: (string | number)[] = ["Hammad", 11, "Ali"];
// * Order of Array is important in some cases
// const user: [string, number, boolean] = ["Hammad", 11, false];

// * Example
// const rgb: [number, number, number] = [255, 122, 33];

// ? Type Aliases for tuples
// type User = [number, string];
// const user: User = [1, "Hammad"];

// ? Something wrong about tuples
// type User = [number, string];
// const user: User = [1, "Hammad"];
// user.push(2); // Not following the above orders

// ! Enum  -- Enumerations
// ? Not a good code
// const AISLE = 0;
// const MIDDLE = 1;
// const WINDOW = 2;

// ? Good Code in enum form
// const enum SeatChoice {
// 	AISLE = 10,
// 	MIDDLE,
// 	WINDOW,
// 	FOURTH,
// }

// const hcSeat: SeatChoice = SeatChoice.AISLE;
// console.log(hcSeat);
