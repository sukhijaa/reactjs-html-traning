// Print numbers from 1 to 100 using 4 intervals
// You will need to have 4 different setInterval statements
// Implement them in such a way that they always print 1 to 100 in 100 seconds.
// You are not allowed to use if - else
// Hint : You'll need to use setTimeout

const N = 100;
const PRINT_GAP = 200;

let currentNumber = 0;
let maxIntervalNumber = Number.MIN_SAFE_INTEGER;

const clearAllIntervals = () => {
    for (let i = 0; i <= maxIntervalNumber; i++) {
        clearInterval(i);
    }
};

const handleIntervalPrintValue = (intervalNumber) => {
    console.log(`Interval ${intervalNumber} Prints ${++currentNumber}`);
    if (currentNumber >= N) {
        clearAllIntervals();
    }
};

const registerInterval = (intervalNumber) => {
    maxIntervalNumber = Math.max(setInterval(() => handleIntervalPrintValue(intervalNumber), 4 * PRINT_GAP), maxIntervalNumber);

};

// Print numbers of the form 4n
setTimeout(() => registerInterval(1), PRINT_GAP);

// Print numbers of the form 4n + 1
setTimeout(() => registerInterval(2), 2 * PRINT_GAP);

// Print numbers of the form 4n + 2
setTimeout(() => registerInterval(3), 3 * PRINT_GAP);

// Print numbers of the form 4n + 3
setTimeout(() => registerInterval(4), 4 * PRINT_GAP);
