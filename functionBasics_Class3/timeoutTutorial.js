for (let i = 0; i < 10; i++) {
    console.log("Inside For " + i);
}

let myVar = 5;
while(myVar > 0) {
    console.log("Inside while " + myVar);
    myVar--;
}

do {
    console.log("Inside doWhile " + myVar);
} while (myVar > 10);

var timeoutRef = setTimeout(() => {
    console.log("1 sec complete");
} , 15000);

var iteration = 0;

console.log("Timeout Ref" ,timeoutRef);

var handleInterval = () => {
    iteration++;
    console.log(new Date().getSeconds());
    if (iteration >= 1) {
        clearInterval(intervalRef);
        clearInterval(secondInterval);
        clearTimeout(timeoutRef);
    }
};

var intervalRef = setInterval(handleInterval, 1000);
var secondInterval = setInterval(handleInterval, 1000);

let initialTimeoutInMS = 1000;
let exponentialFactor = 1.2;
var currentTimeout = initialTimeoutInMS;
let maxTimeout = 15000;

var failuretimes = 5;
const handleTimeout = () => {
    failuretimes--;
    currentTimeout = Math.min(exponentialFactor * currentTimeout, maxTimeout);
    console.log(`Exponential Failure Found - New Timeout : ${currentTimeout} - - - New Date : ${new Date().getSeconds()} --- Rewmaining counts : ${failuretimes}`);
    if (failuretimes >= 0) {
        setTimeoutFunction();
    }
};

const setTimeoutFunction = () => setTimeout(handleTimeout, currentTimeout);

setTimeoutFunction();

const printSomething = () => {
    console.log("Print something");
}

console.log(setTimeout(printSomething, 1000));
console.log(setInterval(printSomething, 1000));
console.log(setTimeout(printSomething, 1000));
console.log(setTimeout(printSomething, 1000));
console.log(setTimeout(printSomething, 1000));
console.log(setTimeout(printSomething, 1000));
console.log(setTimeout(printSomething, 1000));
console.log(setTimeout(printSomething, 1000));
console.log(setTimeout(printSomething, 1000));
console.log(setTimeout(printSomething, 1000));
console.log(setTimeout(printSomething, 1000));
console.log(setTimeout(printSomething, 1000));
console.log(setTimeout(printSomething, 1000));

for (let i  = 0; i < 1000; i++) {
    clearInterval(i);
    clearTimeout(i)
}