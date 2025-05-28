"use strict";
// Interfaces are mainly used for defining the shape of objects 
function sayHiToUser(obj) {
    console.log(`Hello, ${obj.userName} ${obj.gender}`);
}
sayHiToUser({ userName: "roshan", email: "rosna@gmail.com", password: "abc", gender: "Male", age: 21 });
// so now when we use the Abcd interface the both feilds will be merged together
function foo(obj) {
    // console.log(obj.);
}
