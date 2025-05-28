"use strict";
// Basic types in typeScript 
let myName = "Roshan";
let age = 21;
let isStudent = true;
// if we try to change the type of data we have specified in the type this will 
// show us an error
// age = "21"  // this will give an error
// working with arrays
let fruits = ["apples", "mango"];
let marks = [85, 65, 75, 92];
// here if we try to put any different type value inside the array it will show some
// error
// like 
// fruits.push(true) // Error
// tuples
//  A Tuple is fixed length array where each element has a particular type.
let user = ["Roshan", 21];
let tuples1 = ["Akash", true, 25, "Happy"];
// enum
var roles;
(function (roles) {
    roles["ADMIN"] = "admin";
    roles["USER"] = "user";
    roles["GUEST"] = "guest";
})(roles || (roles = {}));
var colors;
(function (colors) {
    colors[colors["RED"] = 0] = "RED";
    colors[colors["BLUE"] = 1] = "BLUE";
    colors[colors["GREEN"] = 2] = "GREEN";
})(colors || (colors = {}));
console.log(colors);
console.log('roles: ', roles);
const rolEs = {
    "Name": 'Roshan'
};
console.log(rolEs);
// any
let a;
a = "Roshan";
a = 89;
a = true;
// with the any type it can hold any data type but this removes all the features of typescript
// typescript kind of gets off
// unknown 
// Like any, but safer. Forces you to check the type before using it
let b;
b = "Bhagat";
b = false;
// with unknown type also it don't bother us to put any datatype value but forces us to check before use of the variable
if (typeof b == "string") {
    b.includes("a");
}
// b.includes()  // gives error 
// null 
let x;
// x = "Vinee"  // when we something is gonna return null then we explicitly put the type null
