// ! Generics

// const score: Array<number> = [];
// const names: Array<string> = [];

// ? Examples
// function identityOne(val: boolean | number): boolean | number {
// 	return val;
// }

// * No idea of type here
// function identityTwo(val: any): any {
// 	return val;
// }

// * Type
// function identityThree<Type>(val: Type): Type {
// 	return val;
// }

// identityThree(2);
// identityThree("str");

// * Easy to write Code
// function identityFour<T>(val: T): T {
// 	return val;
// }
// identityFour(2);
// identityFour("2");

// * Interfaces
// interface Bottle {
// 	brand: string;
// 	type: number;
// }

// function identityFive<Bottle>(val: Bottle): Bottle {
// 	return val;
// }
// identityFive<Bottle>({});
