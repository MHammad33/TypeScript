// ! Type Narrowing

// ? Use typeof to resolve this type narrowing issue

// * Example 1
// function detectType(val: number | string | number[]) {
// 	// return val.toUpperCase(); // error

// 	if (typeof val === "string") {
// 		return val.toUpperCase();
// 	}

// 	// * Keep checking -- Issue
// 	// return val + 3; // erro
// }

// * Example 2
// function provideId(id: string | null) {
// 	if (!id) {
// 		console.log("Please provide id");
// 		return;
// 	}
// 	id.toLowerCase();
// }

// * Example 3 -- Not all cases covers (length might be zero)
// function printAll(strs: string | string[] | null) {
// 	if (strs) {
// 		if (typeof strs === "object") {
// 			for (const s of strs) {
// 				console.log(s);
// 			}
// 		} else if (typeof strs === "string") {
// 			console.log(strs);
// 		}
// 	}
// }

// ! The in operator narrowing
// interface User {
// 	name: string;
// 	email: string;
// }

// interface Admin {
// 	name: string;
// 	email: string;
// 	isAdmin: boolean;
// }

// function isAdminAccount(account: User | Admin): boolean {
// 	// return account.isAdmin; // error

// 	if ("isAdmin" in account) {
// 		return account.isAdmin;
// 	}

// 	return false;
// }

// ! instanceof
// function logValue(x: Date | string) {
// 	if (x instanceof Date) {
// 		console.log(x.toUTCString());
// 	} else {
// 		console.log(x.toUpperCase());
// 	}
// }

// ! Type Predicates
// type Fish = { swim: () => void };
// type Bird = { fly: () => void };

// function isFish(pet: Fish | Bird) {
// 	return (pet as Fish).swim !== undefined;
// }

// function getFood(pet: Fish | Bird) {
// 	if (isFish(pet)) {
// 		pet; // Type still not confirmed
// 		return "Fish Food";
// 	} else {
// 		pet; // Type still not confirmed
// 		return "Bird Food";
// 	}
// }

// * Improving code
// function isFish(pet: Fish | Bird): pet is Fish {
// 	return (pet as Fish).swim !== undefined;
// }

// function getFood(pet: Fish | Bird) {
// 	if (isFish(pet)) {
// 		pet; // Type confirmed
// 		return "Fish Food";
// 	} else {
// 		pet; // Type confirmed
// 		return "Bird Food";
// 	}
// }

// ! Discriminated Union and Exhaustiveness Checking
// interface Circle {
// 	kind: "circle";
// 	radius: number;
// }

// interface Square {
// 	kind: "square";
// 	side: number;
// }

// interface Rectangle {
// 	kind: "rectangle";
// 	length: number;
// 	width: number;
// }

// type Shape = Circle | Square | Rectangle;

// function getTrueShape(shape: Shape) {
// 	if (shape.kind === "circle") {
// 		return Math.PI * shape.radius ** 2;
// 	} else if (shape.kind === "square") {
// 		return shape.side * shape.side;
// 	}
// }

// ? Exhaustiveness Checking
// function getArea(shape: Shape) {
// 	switch (shape.kind) {
// 		case "circle":
// 			return Math.PI * shape.radius ** 2;
// 		case "square":
// 			return shape.side * shape.side;
// 		case "rectangle":
// 			return shape.length * shape.width;
// 		default:
// 			const _defaultForShape: never = shape;
// 			return _defaultForShape;
// 	}
// }
