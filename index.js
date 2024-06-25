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
var User = /** @class */ (function () {
    function User(name, password) {
        this.name = name;
        this.password = password;
        this._courseCount = 1;
        this.city = "Pasrur";
        this.name = name;
        this.password = password;
    }
    Object.defineProperty(User.prototype, "getCity", {
        get: function () {
            return this.city;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        set: function (count) {
            if (this._courseCount <= 1) {
                throw new Error("Count less than or equal to 1");
            }
            this._courseCount = count;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var hammad = new User("Hammad", 1);
console.log(hammad.getCity);
