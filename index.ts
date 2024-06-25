// ! Type Aliases

type User = {
	name: string;
	email: string;
	isActive: boolean;
};

// Using Type Alias for Parameter's type Checking
function createUser(user: User): User {
	return user;
}

createUser({ name: "Hammad", email: "email", isActive: false });
