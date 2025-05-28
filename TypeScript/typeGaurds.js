"use strict";
// Type Gaurd 
function abcdef(arg) {
    // type narrowwing 
    if (typeof arg == "string") {
        return "string";
    }
    else if (typeof arg == "number") {
        return "number";
    }
    else {
        return "boolean";
    }
}
console.log(abcdef("Hello"));
console.log(abcdef(45));
console.log(abcdef(true));
