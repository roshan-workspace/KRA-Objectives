// Interfaces are mainly used for defining the shape of objects 

// for example we are creating a function that takes a object as argument so typescirpt would not know that the 
// provide obj has with type of key value pairs in it so for create a structure of any object we use interfaces



interface UserInterFace{
    userName :string;
    email : string;
    password : string
    gender?:string;
    age:number
}

function sayHiToUser(obj:UserInterFace):void{
     console.log(`Hello, ${obj.userName} ${obj.gender}`);
}

sayHiToUser({userName:"roshan", email:"rosna@gmail.com", password:"abc", gender:"Male",age:21})


// and for providing the optional feilds we can do something like this 


// interfaces can be extended
interface Admin extends User{
    isAdmin: boolean
}





// and two interfaces with the same name get merged together
interface Abcd{
    name: string
}


interface Abcd{
    email:string
}


// so now when we use the Abcd interface the both feilds will be merged together
function foo(obj:Abcd){
    // console.log(obj.);

}

 


