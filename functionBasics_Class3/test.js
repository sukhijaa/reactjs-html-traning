var a = {};

// Global Scope
console.log("I am loaded");

a.abc = 5;
a["abc def"] = 5;

console.log(a);

// Defininition of a block - Block Scope
{
    var myTest = 6;
    function test() {
        console.log(test);
    }

    let abc = 5;

    var myTest = 10;

    abc = 10;

    const def = 5;
}

test();
console.log(myTest);

// Everything inside a function belongs to function scope
function myTestFunction() {
    // Function Scope - Local Scope
    console.log("I am loaded");

    var a = {};
    a.abc = 5;
    a["abc def"] = 5;

    console.log(a);

    function test() {
        console.log(test);
    }

    test();
    return 5;
}

var tester = 5;
console.log(tester);

var tester = 10;
console.log(tester);

var abc = function () {
    console.log("abc");
};

var def = function (callbackFn) {
    console.log("def");
    callbackFn();
};

def();