/* Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name. */ 




let magicians: string[] = ["David", "Alice", "Chris"];

// Copy the magicians list
let copy = [...magicians];

function show_magicians(greet: string): string {
  let withGreeting = "";  // Initialize with an empty string
  for (let item of copy) {
    withGreeting += `${greet} ${item}\n`;  // Add space explicitly and newline for clarity
  }
  return withGreeting;
}

let myGreeting = show_magicians("Hello");

// Split only if necessary (assuming no newlines in greet)
let array = myGreeting.split('\n');  // Optional split based on your needs

console.log(array);  // Output: ["Hello David", "Hello Alice", "Hello Chris"] (if split)
console.log(magicians);  // Output: ["David", "Alice", "Chris"] (original list remains unchanged)

