// const callback4 = () => {
//     console.log(4);
// };
//
// const callback3 = (cb4) => {
//     console.log(3);
//     setTimeout(cb4, 1000);
// };
//
// const callback2 = (cb3, cb4) => {
//     console.log('inner');
//     setTimeout(() => cb3(cb4), 1000)
// };
//
// const callback1 = (cb2, cb3, cb4) => {
//     setTimeout(() => cb2(cb3, cb4), 1000)
// };
//
// setTimeout( () => callback1(callback2, callback3, callback4), 1000);

// Promise - JS promises us a fulfilled task
// State 1 : Pending
// state 2 : Resolved State or Fulfilled State
// State 3 : Error State or unfulfilled state


// new Promise((successCB, failureCB) => task())
// new Promise((resolveCB, rejectCB) => task())
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const response = {responseCode: 400, responseMessage : {body : [1,2,3,4]}};

        try {
            if (response.responseCode >= 400) {
                reject(response.responseMessage.body);
            } else {
                // throw new Error("123456");
                resolve(response.responseMessage.body);

            }
        } catch (e) {
            reject(e.message);
        }
    }, 3000);
});

promise.then((response) => {
    // SUccess case handling
    console.log("timeout Complete 1", response);
    return [1,3,4];
}).then((response) => {
    // SUccess case handling
    console.log("timeout Complete 2", response);
    throw new Error("Errored in 2");
}).then((response) => {
    // SUccess case handling
    console.log("timeout Complete 3", response);
    return [1,3,4];
}).then((response) => {
    // SUccess case handling
    console.log("timeout Complete 4", response);
}).catch(e => {
    // Failure case handling or exception handling
    console.log("Timeout failed", e.message);
    throw new Error("Catch Error");
}).catch((e) => {
    console.log("Another Error", e.message);
}).finally(() => {
    console.log("Finally")
});