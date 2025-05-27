
// examples 
console.log("App started");

Promise.resolve()
  .then(() => {
    console.log("Microtask 1");
    return Promise.resolve("Microtask 2");
  })
  .then((result)=>{
    console.log(result)
  })
  .catch((error)=>{
    console.log(error)
  });

console.log("App running...");



// other examples
console.log('script start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(() => {
  console.log('promise1');
}).then(() => {
  console.log('promise2');
});

console.log('script end');

// promises are part of microtasks so it gets into the microtask queue and 
// the microtask queue has the higher priority over the callback queue so output would be 

// script start
// script end
// promise1
// promise2
// setTimeout


Promise.resolve().then(() => {
  console.log("First microtask");
  Promise.resolve().then(() => console.log("Second microtask"));
  console.log("Final microtask");
});

// it always executes the synchrouous code first then only it will move to the microtask queue

