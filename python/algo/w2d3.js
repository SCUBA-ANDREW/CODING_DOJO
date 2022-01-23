/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";
// temp = ["hello","world"]
// temp[0]="hello"
// tempword="0lleh"
/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */

// create a function takes in a string
function reverseWords(str) {
    // create a string variable for final outcome
    var fin_outcome= ""
    // utilizing split built-in function to separate the string based on " "(i.e. space)
    var temp= str.split(" ")
    // go through each of the string blocks and reverse them
    for(var i=0;i<temp.length;i++){
        var tempword=""
        for(var j=temp[i].length-1;j>=0;j--){
            tempword+=temp[i][j]
        }
        temp[i]=tempword
    }
    // put the array back to the string
    fin_outcome=temp.join(" ")
    // return string
    return fin_outcome
}
// console.log(reverseWords(str3))

// *****************************************************

/* 
  Reverse Word Order
  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

const two_str1 = "This is a test";
const two_expected1 = "test a is This";

/**
 * Reverses the order of the words but not the words themselves form the given
 * string of space separated words.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string containing space separated words.
 * @returns {string} The given string with the word order reversed but the words
 *    themselves are not reversed.
 */
// create a function to feed in a string
function reverseWordOrder(wordsStr) {
    // create a string variable for final outcome
    var f_outcome = ""
    // split the word based on spaces " "
    var temp_arr=wordsStr.split(" ")
    // take array from split and go through it from backwards(reverse it)
    temp_arr = temp_arr.reverse()
    // feed it back to the final outcome variable
    f_outcome=temp_arr.join(" ")
    // return final outcome
    return f_outcome
}
// console.log(reverseWordOrder(two_str1))
// ********************************************************

/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/

const three_str1 = "abcABC";
const three_expected1 = "abcABC";

const three_str2 = " helloo ";
const three_expected2 = " helo";

// Bonus
const three_str3 = " hellool ";
const three_expected3 = "heol ";

/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */

// create a function feeds in a string
function stringDedupe(str) {
    // create a string variable for final outcome
    var outcome=""
    // create a temp empty array
    var temp_array=[]
    // iterate through the string, if it is not yet included in the array, add it into the array,
    for(var i=0;i<str.length;i++){
        if(temp_array.indexOf(str[i])<0){
            temp_array.push(str[i])
        }
    }
    // return the array into final outcome string, and then return that
    outcome = temp_array.join("")
    return outcome

}
// console.log(stringDedupe(three_str3))