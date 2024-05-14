// 16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guests: string[] = ["fatima", "Zainab", "Zoya","Ayan","Sara", "Khadija",];

console.log(guests);

console.log("I am thinking to invite three more guests");


// Adding new guest in beginning
let beginning = "sana";

guests.unshift(beginning);

console.log(guests);

// Adding new guest in middle

let middle = "Mariyam";

guests.splice(1,0, middle);

console.log(guests);

// Adding new guests in last

let last = "Iqra";

guests.push(last);

console.log(guests);


// Print a message

guests.map((items)=>
               console.log(`${items} Welcome to the biggest dinenr table`)
);