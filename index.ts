// ! Interfaces

// interface User {
// 	readonly dbId: number;
// 	userId: number;
// 	name: string;
// 	googleId?: string;
// 	// startTrial: () => string;
// 	startTrial(): string;
// 	getSomething(val: number): number;
// }

// const hammad: User = {
// 	dbId: 1213232,
// 	userId: 1,
// 	name: "Hammad",
// 	startTrial: () => "Trial",
// 	getSomething: (val: 1) => {
// 		return val;
// 	},
// };
// // hammad.dbId = 1; // error

// ! Interfaces vs Types
// Interfaces automatically inherits properties when declared with same name

interface User {
	readonly dbId: number;
	userId: number;
	name: string;
	googleId?: string;
	// startTrial: () => string;
	startTrial(): string;
	getSomething(val: number): number;
}

interface User {
	// * All properties inherited
	githubToken: string;
}

const hammad: User = {
	dbId: 1213232,
	userId: 1,
	name: "Hammad",
	startTrial: () => "Trial",
	getSomething: (val: 1) => {
		return val;
	},
	githubToken: "8738fbckzs",
};

// ? Inheritance
interface Admin extends User {
	role: "admin" | "ta" | "learner";
}

// const Ali: Admin = hammad;
