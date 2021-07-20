const A = [1,2,3,4,5,6,7,8,9,10];
const B = []; // Not allowed to change this statement
// Find the 4th Largest Number from this array
// Copy the contents of this array into another array B
// hint : Read about A.forEach() and A.map()

// Solution : Sort the Array A and get the 4th Largest Number
const a_New = [...A];
a_New.sort((a, b) => a - b);
console.log(`4th Largest Element: ${a_New[a_New.length - 4]}`);
a_New.reverse();
console.log(a_New);

// Solution : Sort the Array A in descending and get the 4th Number
const a_NewDesc = [...A];
a_NewDesc.sort((a, b) => {
    return b - a;
});
console.log(`4th Largest Element: ${a_NewDesc[3]}`);

// To Copy all elements, we will traverse over the array A and push each element into B
A.forEach((element, index) => B.push(element));
console.log(B);

const C = A.map((a, index) => {
    console.log(`a : ${a}, index: ${index}`);
});
console.log(C);

const element4 = A.find(a => a === 4);
console.log(element4);

const except4 = A.filter(a => a !== 4);
console.log(except4);