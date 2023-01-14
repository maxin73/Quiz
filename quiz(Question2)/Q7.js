// Question 7: What's the value of num?
const num = parseInt("7*6", 10);

console.log(num);

// A: 42
// B: "42"
// C: 7
// D: NaN

// Ans: C
// Short explanation: "parseInt()" converts a string to an integer, up to and including a non-numeric character. In this case, "*" is a non-numeric character.