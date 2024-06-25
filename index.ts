// ! Functions

// ? Types in parameters
// function addTwo(num: number) {
// 	return num + 2;
// }
// addTwo(2);

// function getUpper(val: string) {
// 	return val.toUpperCase();
// }
// getUpper("hammad");

// function signUpUser(name: string, email: string, password: string) {}
// signUpUser("Hammad", "hammad@gmail.com", "1122");

// const loginUser = (name: string, isAuthorized: boolean = false) => {};
// loginUser("Hammad");

// ? Return Values
// const getUpper = (val: string) => val.toUpperCase();
// const upper = getUpper("hammad"); // String type

// const getVal = (myVal: number): boolean => {
// 	if (myVal > 5) {
// 		return true;
// 	}
// 	return false;
// };
// console.log(getVal(4));

const heroes = ["hero1", "hero2", "hero3"];
// const heroes = [1, 2, 3];

// ? Not a big difference
// heroes.map((hero: string) => {
// 	return `Hero is: ${hero}`;
// });

// ? Better Code
// heroes.map((hero): string => {
// 	return `Hero is: ${hero}`;
// });
