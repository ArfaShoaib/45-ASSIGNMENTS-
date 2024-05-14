// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program .   


//I have Added a new line that prints a message saying that you can invite only two people for dinner.
let guestss: string[] = ["fatima", "Zainab", "Zoya","Ayan","Sara", "Khadija",];
console.log(guestss);
console.log("Sorry I can only invite two people")


// I have removed guests only two guests are remaining...
while(guestss.length > 2){
let removed_guests = guestss.pop();
console.log(`${removed_guests} sorry you are not invited`);
}


// invites only 2 remaining guestss...
guestss.map((items) =>
  console.log(`${guestss} you are still invites`)
)


// Also removed 2 remaining guests from list..
guestss.splice(0,2);
console.log(guestss);