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

// class User {
// 	private readonly city: string = "Pasrur";
// 	constructor(public name: string, private password: number) {
// 		this.name = name;
// 		this.password = password;
// 	}
// }

// const hammad = new User("Hammad", 1122);
// // hammad.city = "Pasrur"; // error
// // console.log(hammad.city); // error

// ! Getters and Setters
class User {
	private _courseCount = 1;
	private readonly city: string = "Pasrur";
	constructor(public name: string, private password: number) {
		this.name = name;
		this.password = password;
	}

	get getCity(): string {
		return this.city;
	}

	get courseCount(): number {
		return this._courseCount;
	}

	set courseCount(count: number) {
		if (this._courseCount <= 1) {
			throw new Error("Count less than or equal to 1");
		}
		this._courseCount = count;
	}
}

const hammad = new User("Hammad", 1);
console.log(hammad.getCity);
