// Question 8:
// Write a function indexOfIgnoreCase taking two strings  
// and determining the first occurrence of the second  
// string in the first string. The function should be  
// case insensitive.
// Example: indexOfIgnoreCase('bit','it') and  
// indexOfIgnoreCase('bit','IT') should return 1.
//Hint
//function indexOfIgnoreCase(s1, s2) {
// Change s1 and s2
// first to lowercase.
// Then use the
// indexOf method.
//}

// Ans:
function indexOfIgnoreCase(s1, s2) {
  var l1 = s1.toLowerCase();
  var l2 = s2.toLowerCase();
  return l1.indexOf(l2);
}

console.log(indexOfIgnoreCase('bit', 'IT'));