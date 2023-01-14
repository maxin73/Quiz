// Question 10:
// Write a function normalize, that replaces '-'  
// with '/' in a date string.
// Example: normalize('20-05-2017') should return  
// '20/05/2017'.

function dateConvert(date){
  var result = date.replace('-', '/');

  while(result !== date){
    date = date.replace('-', '/');
    result = result.replace('-', '/');
  }
  return result;
}

console.log(dateConvert('20-05-2017'));