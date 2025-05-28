"use strict";
// function and function types 
function abcd(name, age, cb) {
    console.log(name, age);
    cb("abara ka dabra");
}
abcd("Roshan", 21, (arg) => {
    console.log(arg);
});
// functions with optional params
function getUserDetails(name, age, gender) {
    console.log(name, age, gender);
}
getUserDetails("Roshan", 21, "Male");
getUserDetails("Sandeep", 21);
// rest operator in function
function addNums(a, b, c, d, e) {
    return a + b + c + d + e;
}
console.log(addNums(5, 10, 15, 20, 25)); // this is ok but not efficent
// so in this situation where we have to take lots of parameter to any funciton then we use rest operator
function addNumsWithRestOp(...args) {
    return args.reduce((total, num) => total + num);
}
console.log(addNumsWithRestOp(5, 10, 15, 20, 25));
