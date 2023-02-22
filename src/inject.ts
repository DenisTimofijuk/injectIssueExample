import seedrandom from "seedrandom";

console.log('inject is working');



/**
 * This is the issue. 
 * 
 * I need to use seedrandom in the inject envoroment. 
 * But once I use it, inject script is no longer self-invoking
 */

// ------------------
// Uncomment this and rebuild the APP to see the issue:
// ------------------
// const rng = seedrandom('MyID');
// console.log(rng()); 