const promise1 = new Promise((resolve, reject) => {
    console.log("Starting Promise 1");
    setTimeout(() => {
        console.log("Completed Promise 1 Timeout");
        resolve("I am Promise 1");
    }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
    console.log("Starting Promise 2");
    setTimeout(() => {
        console.log("Completed Promise 2 Timeout");
        reject("I am Promise 2");
    }, 4000);
});

const promise3 = new Promise((resolve, reject) => {
    console.log("Starting Promise 3");
    setTimeout(() => {
        console.log("Completed Promise 3 Timeout");
        reject("I am Promise 3");
    }, 4000);
});

const promise4 = new Promise((resolve, reject) => {
    console.log("Starting Promise 4");
    setTimeout(() => {
        console.log("Completed Promise 4 Timeout");
        resolve("I am Promise 4");
    }, 6000);
});

// When ALL the promises resolves - If any one of them fails, whole block fails
Promise.all([promise1, promise3, promise2, promise4]).then((res) => {
    console.log(res);
}).catch(e => {
    console.log(e);
});

// When any 1 of the promise fulfills, Promise.race fulfils and response is exactly the same as response for promise fulfilled first
Promise.race([promise1, promise3, promise2, promise4]).then(res => {
    console.log("Promise Race Completed");
    console.log(res);
}).catch(e => {
    console.log("Promise Errored");
    console.log(e);
});