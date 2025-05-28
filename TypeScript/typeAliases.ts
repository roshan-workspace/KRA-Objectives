// Type Alias allows you to create a custom name for a type (or group of types), especially useful for complex types 
// or when a type is reused in many places


type sankya = number;
let pi: sankya;


// for the bigger types it can be usefull


// type value = string | null

function sayHi(name:string | null){
    if(typeof name == "string"){
        console.log(`Hello, ${name} `);

    }else{
        console.log("Hello, sir,");
    }
}

sayHi("Roshan")


// Simple type Alias example
type UserName = string

let user1:UserName= "Rahul"
let user2: UserName= "Varun"



// object alias
type USER = {
name:string
age:number
isAdmin:boolean
}

let admin : USER = {
name:"Vinayak",
age:45,
isAdmin:true 
}


// function alias

type AddFunction  = (a:number, b:number) => number;
const add:AddFunction = (i,j) => i+j;


console.log(add(50,60)) // 110 


