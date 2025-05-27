// async/await is syntactic sugar over Promises. When you use await, JavaScript pauses the execution
//  of the async function until the awaited promise resolves.

// it gives us cleaner syntax for handling the promises


// function delay(ms) {
//   return new Promise(resolve => setTimeout(()=>{
// resolve()
//   },ms));
// }

// async function doSomething() {
//   console.log("Start");
//   await delay(1000);  
//   console.log("After 1 second");
// }

// doSomething();


// fetching data 
async function fetchUserData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const user = await response.json();
    console.log(user);
  } catch (err) {
    console.error("Failed to fetch user", err);
  }
}

fetchUserData()


// working with promise.all with async await
async function getData(){
    const urls  = ["https://jsonplaceholder.typicode.com/todos/1",
                    "https://jsonplaceholder.typicode.com/todos/2"]

    console.log("Fetching data");        
    try {
         const response = await Promise.all(urls.map((url)=>{
        return fetch(url)
        }))      
    
        const data = await Promise.all(response.map((data)=>{
            return data.json()
         }))
         console.log(data);
        
    } catch (error) {
        console.log({error});
    }        
}

getData()




// function wait(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function runTasks() {
//   console.log("Task 1 started");
//   await wait(1000);
//   console.log("Task 1 done");

//   console.log("Task 2 started");
//   await wait(2000);
//   console.log("Task 2 done");
// }

// runTasks();




