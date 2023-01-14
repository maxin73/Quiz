// Question 1: What's the output?
function greeting() {
console.log(name);
console.log(age);
var name = "Hana";
let age = 21;
}

greeting();
// A: Hana and undefined
// B: Hana and ReferenceError
// C: ReferenceError and 21
// D: undefined and ReferenceError

// Ans: D
// Short explanation: "console.log"s should be written after variable declarations.


