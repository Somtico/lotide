const assertEqual = require("../assertEqual");
const head = require("../head");

// Head TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([200]), "Thanks.");
assertEqual(head([]), 5);
assertEqual(head([true]), 5);
assertEqual(head([false]), 5);