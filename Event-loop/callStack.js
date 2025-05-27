function firstFunction() {
  console.log("First function started");
  secondFunction();
  console.log("First function ended");
}

function secondFunction() {
  console.log("Second function started");
  thirdFunction();
  console.log("Second function ended");
}

function thirdFunction() {
  console.log("Third function started and ended");
}

firstFunction();

// the otput would look like 
// First function started
//     Second function started
//     Third function started and ended
//     Second function ended
//     first function ended


// for this the call stack would look like this
// thirdFunction
// secondFunction
// firstFunction


// at first the firstFunction will enter the call stack then firstFunction calls 
// secondFunction, it will get added on top of firstFunction then secondFunction
// calls thirdFunction , it will also get added on top of secondFunction and the
// execution of thirdFunction will complete and it gets removed from the stack
// then it will come back to secondFunction executes it and get removed from the stack
// and come back to the firstFunction,completes it execution and pops out from the stack






