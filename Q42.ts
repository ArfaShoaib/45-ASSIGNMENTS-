/* Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

 */

let magicians : string[] = ["David", "Alice", "Chris"];

function show_magicians(greet: string){
    for (let items of magicians) {
        console.log(greet , items)
    }
   }

   show_magicians("Hello How are you? Mr")