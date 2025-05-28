
// generic functions

function random<T>(a:T){
    console.log(a);
}


random <number>(78)


function log<A>(arg:A){
    console.log(arg)
}


log("Hello")
log(12)
log(true)




// generic interfaces

interface Bank<A> {
    userName : string;
    accountNumber: A
}

let obj:Bank<number>= {
    userName:"Rohsan",
    accountNumber:123
}


interface ABC<T>{
    name:string;
    age:number;
    id:T
}

const abcde: ABC<number>= {
    name:"Roshan",
    age:21,
    id:1
}

