// ! Classes

// class User {
// 	name: string;
// 	password: number;
// 	readonly city: string = "Pasrur";
// 	constructor(name: string, password: number) {
// 		this.name = name;
// 		this.password = password;
// 	}
// }

// const hammad = new User("Hammad", 1122);
// hammad.city = "Pasrur"; // error

// ! Private and Public in TypeScript

class User {
	private readonly city: string = "Pasrur";
	constructor(public name: string, private password: number) {
		this.name = name;
		this.password = password;
	}
}

const hammad = new User("Hammad", 1122);
// hammad.city = "Pasrur"; // error
// console.log(hammad.city); // error
