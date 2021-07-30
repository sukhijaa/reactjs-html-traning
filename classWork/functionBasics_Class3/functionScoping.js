var abc = function () {
    console.log("abc");
    return function () {
        console.log("Inline ABC");
        return function() {
            console.log("Inline Anonymous ABC");
            return () => {
                console.log("Inline Anonymous ABC Arrow");
            }
        }
    }
};

var def = function (callbackFn) {
    console.log("def");
    // var returnFn = callbackFn();
    // returnFn();

    // Function Chaining
    callbackFn()()()();
};

function CAR (color, make, model, year) {
    this.make = make;
    this.color = color;
    this.model = model;
    this.year = year;

    this.getMake = function() {
        return this.make;
    };

    this.getYear = () => {
        return this.year;
    };

    this.callbackExecutor = function(callback) {
        console.log("Callback" , callback.bind(this)());
    }
}

CAR.prototype.getColor = function () {
    console.log(this);
    return this.color;
};

CAR.prototype.getModel = () => {
    return this.model;
};

var santro = new CAR("white", "Hyundai", "santro", "2021");
console.log(santro);
console.log(santro.getMake());
console.log(santro.getColor());
console.log(santro.getModel());
console.log(santro.getYear());
console.log(santro.callbackExecutor(santro.getYear));

const getModel = santro.getModel.bind(santro);
const getYear = santro.getYear.bind(santro);
console.log(getModel());
console.log(getYear());
var zen = new CAR("Black", "Maruti", "Zen", "2020");

console.log(santro.getMake === zen.getMake);
console.log(santro.getColor === zen.getColor);
zen.callbackExecutor(santro.getYear);
zen.callbackExecutor(santro.getColor);
zen.callbackExecutor(santro.getMake);

function clickHandler() {
    console.log("clicked");
}

const santroGetMake = santro.getMake;
const santroGetYear = santro.getYear;

