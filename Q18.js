"use strict";
// Seeing the World: Think of at least five places in the world you’d like to visit.
Object.defineProperty(exports, "__esModule", { value: true });
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed. 
// • Store the locations in a array. Make sure the array is not in alphabetical order.
let places = ["Makkah&Madina", "Great Wall Of China", "Burj Khalifa", "Mount Fuji(japan)", "The Blue Mosque"];
console.log("Originial order:", places);
console.log("Alphabetic order:", [...places].sort());
console.log("Original order:", places);
console.log("reverse alphabetical order:", [...places].sort().reverse());
console.log("Original ordder:", places);
console.log("Reverse the order:", places.reverse());
console.log("Reverse the order Again:", places.reverse());
console.log("Sort Your Array:", places.sort());
console.log("Sort Your Array:", places.sort().reverse());
