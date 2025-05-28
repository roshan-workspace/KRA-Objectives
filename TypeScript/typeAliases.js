"use strict";
// Type Alias allows you to create a custom name for a type (or group of types), especially useful for complex types 
// or when a type is reused in many places
let pi;
// for the bigger types it can be usefull
// type value = string | null
function sayHi(name) {
    if (typeof name == "string") {
        console.log(`Hello, ${name} `);
    }
    else {
        console.log("Hello, sir,");
    }
}
sayHi("Roshan");
let user1 = "Rahul";
let user2 = "Varun";
let admin = {
    name: "Vinayak",
    age: 45,
    isAdmin: true
};
const add = (i, j) => i + j;
console.log(add(50, 60)); // 110 
