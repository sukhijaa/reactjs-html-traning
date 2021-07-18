const A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const B = []; // Not allowed to change this statement
// Find the 4th Largest Number from this array
// Copy the contents of this array into another array B
// hint : Read about A.forEach() and A.map()

// Solution : Sort the Array A and get the 4th Largest Number
const a_New = [...A];
a_New.sort();
console.log(`4th Largest Element: ${a_New[a_New.length - 4]}`);

// To Copy all elements, we will traverse over the array A and push each element into B
A.forEach(element => B.push(element));
console.log(B);