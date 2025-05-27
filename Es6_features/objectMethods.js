
// Object.assign method

let nameObj = {name:"Roshan"}
let addressObj = {address:"Delhi"}

let userDetails = Object.assign(nameObj,addressObj)

console.log(userDetails) // {"name":"Roshan", "address":"Delhi"}
// now the target obj(nameObj) is also modified
console.log(nameObj) // {"name":"Roshan", "address":"Delhi"}



// we can provide an empty obj in the place of target obj
let user1Details = Object.assign({}, nameObj, addressObj)

console.log(user1Details) // {"name":"Roshan", "address":"Delhi"}
// but now the nameobj will remain the same
console.log(nameObj) // {"name":"Roshan"}




// object.keys method 
const user = {
  name: "Roshan",
  age: 22,
  role: "Developer",
  getAge(){
      console.log(this.age)
  }
};

const keys = Object.keys(user)  // returns the array of the property names present in the obj
console.log(keys); // ["name", "age", "role","getAge"]



// Object.values method
const user2 = {
  name: "Roshan",
  age: 22,
  role: "Developer",
  getAge(){
      console.log(this.age)
  }
};

const values = Object.values(user2)  // returns the array of the property values present in the object
console.log(values); // ["Roshan",22,"Developer",[Function:getAge]




// Object.entries method
const user3 = {
  name: "Roshan",
  age: 22,
  role: "Developer",
  getAge(){
      console.log(this.age)
  }
};

const entries= Object.entries(user3);
console.log(entries); 
// [
//   [ 'name', 'Roshan' ],
//   [ 'age', 22 ],
//   [ 'role', 'Developer' ],
//   [ 'getAge', [Function: getAge] ]
// ]



// Object.freeze
const settings = Object.freeze({ darkMode: true });
settings.darkMode = false; //  Won't change


// Object.seal
// using this method we modifiy the existing properties  but can't add or delete any property
const user4 = Object.seal({ name: "Roshan" });
user4.name = "Roshan Bhagat"; //  Allowed
user4.age = 30;       //  Not added
delete user4["name"]

console.log(user4);  // the objet will remain the same



