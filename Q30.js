"use strict";
//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
Object.defineProperty(exports, "__esModule", { value: true });
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.//
let usernames = ["ahmed", "aisha", "fatima", "admin", "laiba", "wasay", "dua"];
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === "admin") {
        console.log(`\n \t Hello ${usernames[i]} Would You Like To See a Status Report? \n`);
    }
    else {
        console.log(`Hello ${usernames[i]}! Thanks for logging in again...`);
    }
}
