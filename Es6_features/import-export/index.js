import { PI, add, sub } from "./math.js";

import sayHi, {name, age} from "./combined.js";
 
import * as math from "./math.js" // imports everything 

const r = 12

let areaOfCircle = PI*r*r
console.log(areaOfCircle.toFixed(2));

let CircumferenceOfCircle = 2*math.PI*r
console.log( CircumferenceOfCircle);


let sum =  add(45,55)
console.log(sum);

console.log(math.add(78,22));


let subtractedValue =  sub(55,45)
console.log(subtractedValue);



let person = {name,age}

console.log(person);
console.log(sayHi());

