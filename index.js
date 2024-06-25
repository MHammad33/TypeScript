// ! Readonly Type
var user = {
    _id: "12345",
    name: "Hammad",
    email: "h@gmail.com",
    isActive: false,
};
user.email = "hammad@gmail.com";
// user._id = "123"; // error -- readonly property
