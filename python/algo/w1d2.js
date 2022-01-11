/* 
  Acronyms
  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 
  Do it with .split first if you need to, then try to do it without
*/

const str1 = " there's no free lunch - gotta pay yer way. ";
const expected1 = "TNFL-GPYW";

const str2 = "Live from New York, it's Saturday Night!";
const expected2 = "LFNYISN";

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string to be turned into an acronym.
 * @returns {string} The given str converted into an acronym.
 */

// pseudo code
/*
- create a function that takes in a string and returns a string
- create a var to hold onto the return item (string)
- convert given string into a list - (use .split(" "))
- create a loop to loop through all the items in the new list
    - grab the first letter of each item in the list
    - make uppercase 
    - add it to return item variable
- return the return item (string)
*/

function acronymize(str) {
  var returnsring=""
  var isStartword = true
  for(var i=0;i<str.length;i++){
    if(str.charAt(i)==" "){
      isStartword = true
    }else if(isStartword){
      returnsring+= str[i]
      isStartword=false
    }
  }
  return returnsring
}
/* 
  Given an arr and a separator string, output a string of every item in the array separated by the separator.
  
  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/
// create a function that takes in an array and a separator
function join(arr, separtor){
  var new_string=''
  for(var i=0; i<arr.length;i++){
    if(i == arr.length-1){
      new_string+=arr[i]
    }
    else{
      new_string+= arr[i]+separtor
    }
  }
  return new_string
}
// create a variable to hold the XPathResult(string)
// iterate through the given array
// add each item + separtor into created variable
// remove separator after last item


const arr1 = [1, 2, 3];
const separator1 = ", ";
const expected1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
const expected2 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
const expected4 = "1";

const arr5 = [];
const separator5 = ", ";
const expected5 = "";

/**
 * Converts the given array into a string of items separated by the given separator.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string|number|boolean>} arr The items to be joined as a string.
 * @param {string} separator To separate each item of the given arr.
 * @returns {string} The given array items as a string separated by the given separator.
 */
function join(arr, separator) {}