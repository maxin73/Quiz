// Question 2:
// Write a function secondIndexOf, taking two strings  
// and determining the second occurrence of the second  
// string in the first string. If the search string  
// does not occur twice, -1 should be returned.
// Example: secondIndexOf('White Rabbit', 'it') should return 10.
// function secondIndexOf(s1, s2) {
//  // Use indexOf twice.
// }


//Answer 2:
function secondIndexOf(s1, s2){
  let space = s1.indexOf(' ');
  let result = s1.indexOf(s2, space);
  // let secondWordPosition = s1.substr(s1.indexOf(' ') + 1);
  // let searchWord = secondWordPosition.indexOf(s2);
  return result;
}

console.log(secondIndexOf('White Rabbit', 'it'));