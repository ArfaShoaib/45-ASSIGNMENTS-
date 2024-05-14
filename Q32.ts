// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

const current_users = ["ayan", "zaisha", "mariyam", "batool", "aisha"];

const new_users = ["Ayan", "aryan", "zaisha", "sara", "sana"];

// WE WILL USE FOREACH METHOD

new_users.forEach((new_user) => {
  let new_userlower = new_user.toLowerCase();

  let taken = current_users.some(current_user => current_user.toLowerCase() === new_userlower);

  // WE WILL APPLY CONDITIONS
  if (taken) {
    console.log(`${new_user} needs to choose new user because it is already tasken`);
  } else {
    console.log(`${new_user} is already added`);
    current_users.push(new_user)
  }
});
