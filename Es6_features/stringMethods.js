
// STRING METHODS

// String Methods are built-in functions in JavaScript that you can use to work with and manipulate strings.


// toUpperCase
let urgentMessage = "There is not holiday on saturday!!!"
// so converting the whole sentence into the upperCase we can use  toUpperCase method
const CapitalizedMessage = urgentMessage.toUpperCase()
console.log(CapitalizedMessage)  // THERE IS NOT HOLIDAY ON SATURDAY!!!


//toLowerCase
let para = "one Day there Will be Green every Where and Happy People" 
// If we want to convert this para into lower case we can this method
const lowerCasePare  = para.toLowerCase()
console.log(lowerCasePare) // one day there will be green every where and happy people




// includes
const str = "This is a long sentence to check the method of includes"
console.log(str.includes("Sentence"))  // false
console.log(str.includes("sentence")) // true 

// othere examples for includes
let employeeData = [
    {name:"Ranjan", email:"ranjan@gmail.com"},
    {name:"Viraj", email:"virajgmail.com"},
    {name:"Sonu", email:"na"},
    {name:"Vivek", email:"vivek123@gmail.com"},
]

let employeeDataWithoutProperEmail = employeeData.filter((em)=>{
    return !em.email.includes("@")
})
console.log(employeeDataWithoutProperEmail);



//trim method
// trim method is used for removing the extra white spaces from any string

let message = "   Hello, from vikash!     "
// without trim if we console it will be 
console.log(message)   // "   Hello, from vikash!     "
const formatedMessage = message.trim()  
console.log(formatedMessage) //Hello, from vikash!



// split
// split method is used for converting a strings into a array with a separator
const fruits ="Banana, Mango, Guava, Grapes"
const fruitsArray = fruits.split(", ")
console.log(fruitsArray);













