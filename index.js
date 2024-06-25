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
var User = /** @class */ (function () {
    function User(name, password) {
        this.name = name;
        this.password = password;
        this.city = "Pasrur";
        this.name = name;
        this.password = password;
    }
    return User;
}());
var hammad = new User("Hammad", 1122);
// hammad.city = "Pasrur"; // error
// console.log(hammad.city); // error
