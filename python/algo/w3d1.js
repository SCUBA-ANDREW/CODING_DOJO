/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

const str2 = "        ";
const expected2 = "";

const str3 = "   hello world earth     ";
const expected3 = "hello world earth";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */
// create a function takes in a str, return a str
// iterate through the str to the first char that's not a space" ", and record the index of that char
// if i == str.lengh-1, str[i]==" " then return ""
// iterate backwards, find the last that's not a space" ", and record the index of that char
// utilize substr built-in function to get the trimmed word -> return

function trim(str) {
    var trim_start=0
    var trim_end=0
    for(var i =0; i<str.length;i++){
        if(str[i]!=" "){
            trim_start=i
            break
        }
        else if(i==str.length-1){
            return ""
        }
    }
    for(var j=str.length-1; j>=0;j--){
        if(str[j]!=" "){
            trim_end=j
            break
        }
    }
    return str.substring(trim_start,trim_end+1)
}

// console.log(trim(str3))

// ************************************************************************

/* 
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.
  Is there a quick way to determine if they aren't an anagram before spending more time?
  Given two strings
  return whether or not they are anagrams
*/

const two_strA1 = "yes3";
const two_strB1 = "3eys";
const two_expected1 = true;

const two_strA2 = "yes";
const two_strB2 = "eYs";
const two_expected2 = true;

const two_strA3 = "no";
const two_strB3 = "noo";
const two_expected3 = false;

const two_strA4 = "silent";
const two_strB4 = "listen";
const two_expected4 = true;

const two_strA5 = "not";
const two_strB5 = "noo";
const two_expected5 = false;

/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 * PSEUDOCODE: 
create a function that takes in 2 strings and returns a boolean
compare lengths, if unequal return false
make both strings uppercase ( .toUpperCase() )
create empty 2 objects to hold counts of each character in each string
iterate through both strings and add pairs to each object corresponding to the character counts
compare the objects by iterating through one
if unequal then return false, else return true
 */


 function isAnagram(s1, s2) {
    if( s1.length != s2.length ){
        return false
    }
    s1Upper = s1.toUpperCase()
    s2Upper = s2.toUpperCase()
    s1Chars = {}
    s2Chars = {}
    for(var i = 0; i<s1.length; i++){
        if(!s1Chars.hasOwnProperty(s1Upper[i])){
            s1Chars[s1Upper[i]] = 1
        }
        else if (s1Chars.hasOwnProperty(s1Upper[i])){
            s1Chars[s1Upper[i]] += 1
        }
        if(!s2Chars.hasOwnProperty(s2Upper[i])){
            s2Chars[s2Upper[i]] = 1
        }
        else if (s2Chars.hasOwnProperty(s2Upper[i])){
            s2Chars[s2Upper[i]] += 1
        }
    }
    console.log(s1Chars)
    console.log(s2Chars)
    for (const key in s1Chars){
        if(s1Chars[key] !=s2Chars[key]){
            return false
        }
    }
    return true
}

console.log(isAnagram(two_strA1,two_strB1))