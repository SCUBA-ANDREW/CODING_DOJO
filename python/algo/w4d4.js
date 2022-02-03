/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.
  Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

const num4 = 987234;
const expected4 = 6
// 9+8+7+2+3+4 = 3+3 = 6

/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 * 
 * create a function that takes in a int and return a single digit int
 * if int<10 return int
 * convert the int to a string
 * create a int variable to hold the sum
 * for loop the length of the string, each element in the string will be ParseInt back to int and added to the sum
 * return recursion of that sum
 */
function sumToOneDigit(num) {
    if(num<10){
        return num
    }
    let str=num.toString()
    let sum=0
    for(var i=0;i<str.length;i++){
        sum+=parseInt(str[i])
    }
    return sumToOneDigit(sum)

}

console.log(sumToOneDigit(num1))
console.log(sumToOneDigit(num2))
console.log(sumToOneDigit(num3))
console.log(sumToOneDigit(num4))

// **********************************************************

/* 
  String Anagrams
  Given a string,
  return array where each element is a string representing a different anagram (a different sequence of the letters in that string).
  Ok to use built in methods
*/

const str1 = "lim";
// const expected1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
// Order of the output array does not matter

/**
 * Add params if needed for recursion.
 * Generates all anagrams of the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {Array<string>} All anagrams of the given str.
 */
 function factorial(int){
    var fact = 1
    for( let i=1; i<= int; i++){
        fact *= i
    }
    return fact
}

function anagramize(str){
    let array = str.split('')
    let anagram = ''
    while(array.length > 0){
        anagram += array.splice(Math.floor(Math.random()*(array.length)), 1)
    }
    return anagram
}

function generateAnagrams(str, arr=[]) {
    if(arr.length == factorial(str.length)){
        return arr
    }
    let anagram = anagramize(str)
    while(arr.includes(anagram)){
        anagram = anagramize(str)
    }
    console.log(anagram)
    arr.push(anagram)
    return generateAnagrams(str, arr)
}