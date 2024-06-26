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
function printAll(strs: string | string[] | null) {
	if (strs) {
		if (typeof strs === "object") {
			for (const s of strs) {
				console.log(s);
			}
		} else if (typeof strs === "string") {
			console.log(strs);
		}
	}
}
