// JavaScript runs synchronous code.
// Then runs all microtasks (Promise.then, queueMicrotask).
// and then all the callbacks or timers present in the callback queue


console.log('Start');

setTimeout(() => {
  console.log('Macrotask: setTimeout');
}, 0);

console.log('End');

// output : start  -> End -> Macrotask: setTimeout


// other examples 
setTimeout(() => {
  console.log('Macrotask 1');
}, 0);

setTimeout(() => {
  console.log('Macrotask 2');
}, 0);

console.log('Synchronous');


// so here the output would be 
// Synchronous
// Macrotask 1
// Macrotask 2



// nested macrotasks
console.log('Start');

setTimeout(() => {
  console.log('setTimeout 1');
  Promise.resolve().then(() => {
    console.log('Promise.then inside setTimeout');
  });
}, 0);

Promise.resolve().then(() => {
  console.log('Promise.then 1');
  setTimeout(() => {
    console.log('setTimeout inside Promise.then');
  }, 0);
});

console.log('End');

// output

// Start
// End
// Promise.then 1
// setTimeout 1
// Promise.then inside setTimeout
// setTimeout inside Promise.then






