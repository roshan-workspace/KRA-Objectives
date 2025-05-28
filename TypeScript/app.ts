// Basic types in typeScript 


let myName : string = "Roshan"
let age : number = 21
let isStudent : boolean = true


// if we try to change the type of data we have specified in the type this will 
// show us an error

// age = "21"  // this will give an error



// working with arrays

let fruits : string[] = ["apples", "mango"]
let marks : number[] = [85,65,75,92];

// here if we try to put any different type value inside the array it will show some
// error

// like 
// fruits.push(true) // Error



// tuples
//  A Tuple is fixed length array where each element has a particular type.
let user: [string, number] = ["Roshan", 21];
let tuples1: [ string, boolean, number, string] = ["Akash",true, 25, "Happy"]



// enum
enum roles {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest"
}

enum colors{
    RED,
    BLUE,
    GREEN
}

console.log(colors);
console.log('roles: ', roles);

const rolEs = {
    "Name":'Roshan'
}

console.log( rolEs);



// any
let a ;
a = "Roshan"
a = 89
a = true 

// with the any type it can hold any data type but this removes all the features of typescript
// typescript kind of gets off


// unknown 
// Like any, but safer. Forces you to check the type before using it

let b: unknown;
b = "Bhagat"
b = false 

// with unknown type also it don't bother us to put any datatype value but forces us to check before use of the variable
if(typeof b == "string"){
    b.includes("a")
}

// b.includes()  // gives error 

// null 
let x: null
// x = "Vinee"  // when we something is gonna return null then we explicitly put the type null


