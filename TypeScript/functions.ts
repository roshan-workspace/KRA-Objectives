// function and function types 

function abcd(name:string, age:number, cb:callback){
    console.log(name,age);
    cb("abara ka dabra")
}


type callback= (arg:string)=> void

abcd("Roshan",21,(arg:string)=>{
    console.log(arg);
})




// functions with optional params

function getUserDetails(name:string,age:number,gender?:string){
    console.log(name,age,gender);
}


getUserDetails("Roshan",21,"Male")
getUserDetails("Sandeep",21)



// rest operator in function

function addNums(a:number,b:number,c:number,d:number,e:number):number{
    return a+b+c+d+e
}

console.log(addNums(5,10,15,20,25)); // this is ok but not efficent


// so in this situation where we have to take lots of parameter to any funciton then we use rest operator
function addNumsWithRestOp(...args:number[]){
    return args.reduce((total,num)=>total+num)
}

console.log(addNumsWithRestOp(5,10,15,20,25));

