// ! Readonly Type

// type User = {
// 	readonly _id: string; // Cannot be changed
// 	name: string;
// 	email: string;
// 	isActive: boolean;
// };

// let user: User = {
// 	_id: "12345",
// 	name: "Hammad",
// 	email: "h@gmail.com",
// 	isActive: false,
// };

// user.email = "hammad@gmail.com";
// // user._id = "123"; // error -- readonly property

// ! Optional
// type User = {
// 	readonly _id: string; // Cannot be changed
// 	name: string;
// 	email: string;
// 	isActive: boolean;
// 	creditCardsDetail?: string;
// };

// let user: User = {
// 	_id: "12345",
// 	name: "Hammad",
// 	email: "h@gmail.com",
// 	isActive: false,
// };

// ! Multiple Types
type cardNumber = { cardNumber: string };
type cardDate = { cardDate: string };

type cardDetails = cardNumber &
	cardDate & {
		cvv: number;
	};
