// Push method
let teamMembers = ["Rahul","Vishal","Raman"]
// for adding any new member to the list we can use push method that adds the provided element to the last 
teamMembers.push("Vishnu")
console.log(teamMembers) // [ 'Rahul', 'Vishal', 'Raman', 'Vishnu' ]


// pop for removing the element from last
teamMembers.pop()
console.log(teamMembers) // [ 'Rahul', 'Vishal', 'Raman' ]



// includes method
const allowedRoles = ["admin","developer","owner","manager"]
const userRole = "developer"

if(allowedRoles.includes(userRole)){
    console.log("Grant Permission!")
}


// sort method

// it changes the original array (in-place)
let productsList= [
    {name:"Bag",price:450},
    {name:"Shoes",price:1000},
    {name:"Books",price:250},
    {name:"Clothes",price:700}
]

console.log('productsList: ', productsList);

const sortedProductList = productsList.sort((a,b)=>a.price - b.price)

console.log('productsList: ', productsList);
console.log('SortedproductsList: ', sortedProductList);




// find method : finds the first instance from the array
const users = [
  { name: "Vikash", role: "user" },
  { name: "Arjun", role: "admin" },
  { name: "Shivani", role: "admin" },
];

const firstAdmin = users.find(user => user.role === "admin");
console.log(firstAdmin); // { name: "Arjun", role: "admin" }



// map is also called a higher order function 
// it returns a new array means does'nt modifies the original array
const pricesInUSD = [10, 20, 30];
const convirsionRate = 85.35;

const pricesInINR = pricesInUSD.map(price => price * convirsionRate);
console.log(pricesInINR); // [ 853.5, 1707, 2560.5 ]




// filter 
const products = [
  { name: "Laptop", inStock: true },
  { name: "Phone", inStock: false },
  { name: "Tablet", inStock: true },
];

const availableProducts = products.filter((product)=>{
    return product.inStock
});
console.log(availableProducts);
// [ { name: 'Laptop', inStock: true }, { name: 'Tablet', inStock: true } ]



// reduce method
let cart = [
    {productName:"Bag",Price:400},
    {productName:"Book",Price:700},
    {productName:"Bottal",Price:250},
    {productName:"Pen",Price:500}
]

const getTotalPrice = cart.reduce((total,pro)=>{

   total += pro.Price  
   return total
},0)

console.log(getTotalPrice)



// other examples for reduce method
let nums = [1,2,3,4,5,6,7,8,9]
let Total = nums.reduce((acc,el,index,array)=>{
	return acc+=el
},0)  // here we are providing the value of accumulator else by default it will be the first el of array

console.log(Total)




// Example two for finding the frequency of any data
const fruits = ["apple", "banana", "apple", "orange", "banana","mango"];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1
  return acc
}, {})

console.log(count)  // { apple: 2, banana: 2, orange: 1, mango:1 }











