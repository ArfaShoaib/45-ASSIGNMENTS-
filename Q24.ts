 // More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


let job = "Government";
console.log(job == "Government");  // TRUE
console.log(job !== "government");  // FALSE

let num = 9;

console.log(num > 5);  // TRUE
console.log(num < 8);  // FALSE
console.log(num >= 9);  // TRUE
console.log(num <= 7);   // FALSE


let num1 = 10;
let num2 = 5;
console.log(num1 > 5 && num2 < 5);   // FALSE
console.log(num1 > 9 || num2 < 4);   // TRUE



let array = ["shoes", "dress"];
let newArray ="jewllery";
console.log(Array.isArray(array));    // TRUE
console.log(Array.isArray(newArray)); // FALSE