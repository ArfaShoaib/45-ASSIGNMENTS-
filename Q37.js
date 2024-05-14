"use strict";
/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.  */
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "Large", msg = "I love typescript") {
    console.log(`Making a ${size} T-shirt With a ${msg} Printed On It`);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "Coding is my Passion");
