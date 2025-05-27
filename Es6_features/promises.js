// syntax of promises
const promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("result"); // success
  } else {
    reject("error"); // failure
  }
});

// and we can use .then for success and .catch for handling error

const message = new Promise((res, rej) => {
  setTimeout(() => {
    res("Hello from api");
  }, 2000);
});

// message.then((data)=>{
//     console.log(data)
// }) // after 2s this will response with "Hello from api"

//   other example of promises could be
function validateTransaction(balance, amount) {
  return new Promise((resolve, reject) => {
    if (amount <= balance) {
      resolve(" Transaction Approved");
    } else {
      reject("Insufficient funds");
    }
  });
}

validateTransaction(1000, 5000)
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err))
  .finally(() => console.log("Validation function ended!"));

// fetch also returns a promise that
// fetch("https://fakestoreapi.com/products")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

// example of promise chaining
const doCalculation = new Promise((res, rej) => {
  setTimeout(() => {
    res(5);
  }, 1000);
});

doCalculation
  .then((num) => {
    console.log("First ", num);
    return num * 2;
  })
  .then((num) => {
    console.log("Second ", num);
    return (num += 100);
  })
  .then((num) => {
    console.log("Third ", num);
  });

// using async / await with promises
// Login
function login(username, password) {
  return new Promise((res, rej) => {
    console.log(" user Logging....");
    setTimeout(() => {
      if (username == "Roshan" && password == "123") {
        res({ userid: 1, username });
      } else {
        rej({ "err": "Invalid credential" });
      }
    }, 2000);
  });
}


async function isAuthanticated(){
     let user =  await login("Roshan",123)
     if(!user.userid){
        console.log("User is not authenticated");
     }else{
        console.log("User is authenticated!");
     }
}

isAuthanticated()