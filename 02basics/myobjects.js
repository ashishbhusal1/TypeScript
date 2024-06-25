"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "ashish",
    email: "ashish@gmail.com",
    isActive: true,
};
function createUser2(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "ashish", isPaid: false, email: "h@.com" };
createUser2(newUser);
function createCourse() {
    return { name: "react", price: 250 };
}
function createUser1(user) {
    return { name: "", email: "", isActive: false };
}
createUser1({ name: "", email: "", isActive: false });
var myUser = {
    _id: "1234",
    name: "a",
    email: "a@gmail.com",
    isActive: false,
};
myUser.email = "aa@gmail.com";
