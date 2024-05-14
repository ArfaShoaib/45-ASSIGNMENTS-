"use strict";
/* Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.*/
// function sandwiches(...lists: string[]){
//     return `I want sandwiches of ${lists}`
Object.defineProperty(exports, "__esModule", { value: true });
// }
// let order1 = sandwiches("Mayo Sauce" , "Chicken", "Vegetables");
// let order2 = sandwiches("Eggs", "Cheese");
// let order3 = sandwiches();
// console.log(order1);
// console.log(order2);
// console.log(order3);
function sandwichSummary(...items) {
    // If no items are provided, print a message indicating a bare sandwich
    if (items.length === 0) {
        console.log("Your sandwich is bare! You might want to add some fillings.");
    }
    else {
        // Print each item on a new line with a leading space
        console.log("Your sandwich includes:");
        for (const item of items) {
            console.log(`  * ${item}`);
        }
    }
}
// Call the function three times with a different number of arguments each time
sandwichSummary("bread");
sandwichSummary("turkey", "cheese", "mustard");
sandwichSummary("peanut butter", "jelly");
