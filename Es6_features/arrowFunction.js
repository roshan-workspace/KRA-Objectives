// with multiple parameters 
const f1 = (para1, para2, para3)=>{ 
    // function logic
}
// exmaple:
const addThreeNums =(num1, num2,num3)=>{
    return num1+num2+num3
} 
console.log(addThreeNums(45,55,150)) //250



// With Single Parameter
const f2 = para1 => {   
   // function logic
}
// example:
const square= num => {
  return num**2
}
console.log(square(12)) // 144



// withou any parameter
const f3 = ()=>{   
  // functino  logic
}

const greet = ()=>{
    console.log("Hello, ji")
}
greet() // "Hello, ji"



// implicit return // use full for one liner logics 
// Examples
const f4 = (name) => console.log(`Hello ${name}`)
const double = (num)=>num*2  // here we don't have to write return keyword explicitly



// working with this keyword
const obj = {
name: "Roshan",
age:21,
getName: ()=>{
   console.log(this.name)   // this will try to refer to the window object and give undefined
  }
}


// using arrow function as a callback function
let arr = [1,2,3,4,5]

// here the arrow function is used as a callback function 
const sum  = arr.reduce((acc,el)=>{   
   return acc+=el
},0)



// working with this keyword in arrow function
const team = {
   teamName :"Frontend Team",
   members: ["Vishal", "Gourav","Naman", "Gopal"],
   getTeamsDetails:function(){
    this.members.forEach(member => {
        console.log(`${member} is from ${this.teamName}`)
    });
   }
}


team.getTeamsDetails() 
// outPut would look like: 
// Vishal is from Frontend Team
// Gourav is from Frontend Team
// Naman is from Frontend Team
// Gopal is from Frontend Team
