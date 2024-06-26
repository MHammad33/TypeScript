// ! Generic Classes

// const theFunction = <T, U>(val1: T, val2: U): object => {
// 	return {
// 		val1,
// 		val2,
// 	};
// };

// theFunction(1, "2");

// * Example
// interface Database {
// 	conn: string;
// 	username: string;
// 	password: string;
// }

// const anotherFunction = <T, U extends Database>(val1: T, val2: U) => {};
// anotherFunction(3, { conn: "", username: "", password: "" });

// ? Class Types in Generics
interface Quiz {
	name: string;
	type: string;
}

interface course {
	name: string;
	author: string;
	subject: string;
}

class Sellable<T> {
	public cart: T[] = [];

	addToCart(product: T) {
		this.cart.push(product);
	}
}
