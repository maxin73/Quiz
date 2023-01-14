// Question 9:
// Write a function firstChar, which returns the  
// first character that is not a space when a string  
// is passed.
// Example: firstChar(' Rosa Parks ') should return 'R'.
//Hint:
//function firstChar(text) {
// Trim first.
// Then use the
// charAt method.
//}

function firstChar(text){
  var noSpace = text.trim();
  console.log(noSpace.charAt(0));
}

firstChar(' Rosa Parks ');
