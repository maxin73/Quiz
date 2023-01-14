// Question 3:
// Write a function equals that checks two values  
// for strict equality. If the two values are equal,  
// the string 'EQUAL' should be returned. If they  
// are unequal, you should get 'UNEQUAL'.
// Example: equals(1, 1) should return 'EQUAL' and equals(1, 2)  
// should return 'UNEQUAL'.
// function equals(a, b) {
//  // Initialize a variable with 'UNEQUAL'.
//  // Use 'if' to set the variable to 'EQUAL' if necessary.
//  // Return the variable.
// }


// Answers 3:
function equals(n1, n2){
  if (n1 === n2){
    return "EQUAL";
  }else{
    return "UNEQUAL";
  }
}

console.log(equals(1, 2));
