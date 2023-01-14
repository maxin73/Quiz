// Question 4: What's the output?
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);

// A: 1 1 2
// B: 1 2 2
// C: 0 2 2
// D: 0 1 2

// Ans: C
// Short explanation: 
// * "number" can be changed because it's declared as "let" variable.
// * First console.log: Displayed "0".
// * Sencond console.log: Added 2, then displayed.
// * Third console.log: A number was added at former console.log point, so now it's "2".