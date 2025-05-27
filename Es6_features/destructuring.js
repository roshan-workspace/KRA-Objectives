// Destructuring is concise way to extract values from array or object.


// simple array destructuring
const userInfo= [ "Roshan",21,false]
const [Myname, Myage, isMarried] = userInfo
console.log(Myname, Myage, isMarried);


// we can skip any value as well
const [myName,,IsMarried] =  userInfo
// so here the age is skiped


// this can be helpfull for swaping any variables value 
let a = 5;
let b = 10;
[a, b] = [b, a];

console.log(a); // 10
console.log(b); // 5


// example of array destructuring
const topScores = [98, 95, 91, 88];
const [first, second, third] = topScores;
console.log(`Gold: ${first}, Silver: ${second}, Bronze: ${third}`);
// Gold: 98, Silver: 95, Bronze: 91




// object destrecturing

// Simple Destructuring
const obj = { Name: 'Roshan', Age: 21, City: 'New Delhi' }
const { Name, Age, City } = obj
console.log(Name, Age, City) // Output: Roshan 21 New Delhi

// We can assign any different name while destructuring as well
const {Name:UserName,Age:UserAge} = obj
console.log(UserName, UserAge) // "Roshan" 21


// can assign defalult values in case of property of element does not exitst on the obj or array
// const {name,age,city,education="BCA"} = obj
// console.log(education) // this will not throw any error instead it will give BCA


// Nested Destructuring 
const obj2 = {
    name: 'Raju',
    address: {
        city: 'Kolkata',
        zipCode: '70001'
    },
    hobbies: ['reading', 'music']
};
const { name, address: { city:ilaka, zipCode }, hobbies: [firstHobby] } = obj2;
console.log(name, ilaka, zipCode, firstHobby); // Output: Raju Kolkata 70001 reading


// Destructuring in function parameter
function printDetails({name,address:{city,zipCode},hobbies}){  // Here this fn is using obj Destructuring
		  console.log(`This is ${name}, He lives in ${city}, and his hobbies is ${hobbies[0]} and ${hobbies[1]}.`)
}

printDetails(obj2)

