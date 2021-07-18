// Complete the implementation of Car method such that santro.print() prints:
//      Make: Hyundai , Model : Santro, Year: 2021

function Car (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
};

// We simply need to add a regular function to Car prototype.
// Why prototype : To save up on memory space and not create a new function for every instance of Car
// Why regular : So that context of caller instance is maintained
Car.prototype.print = function () {
    console.log(`Make: ${this.make} , Model : ${this.model} , Year : ${this.year}`)
};

const santro = new Car("Hyundai", "Santro", "2021");

santro.print(); // Output : "Make: Hyundai , Model : Santro, Year: 2021";