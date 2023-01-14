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
function secondIndexOf(s1, s2) {
  let firstIndex = s1.indexOf(s2);
  return s1.indexOf(s2, firstIndex +1);
}

console.log(secondIndexOf('White', 'it'));

//indexOf()は、配列の要素として存在する場合は、その位置(インデックス番号)を返してくれますが、配列の要素として存在しない場合は、-1を返すメソッドです。