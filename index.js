// ! Unions
var Hammad = { name: "Hammad", id: 22 };
Hammad = { username: "Hammad", id: 22 };
function getUser(id) {
    // id.toLowercase(); -- error
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
getUser(1);
getUser("Hammad");
