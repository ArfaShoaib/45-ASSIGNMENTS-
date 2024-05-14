"use strict";
/* Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

 */
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artistname, album) {
    return { artistname, album };
}
console.log(make_album("Atif Aslam", "Jal Pari"));
console.log(make_album("Taylor Swifts", "The Tortured Poets Department"));
console.log("===============================================================================================================");
function make_album2(artistname2, album2, Tracks) {
    return { artistname2, album2, Tracks };
}
console.log(make_album2("Atif Aslam", "Jal Pari", 10));
console.log(make_album2("Taylor Swifts", "The Tortured Poets Department", 20));
console.log(make_album2("The Weeken", "Dawn FM", 5));
console.log("===================================THE END========================================");
