/* 
  recursively find the lowest common multiple between two numbers
  "A common multiple is a number that is a multiple of two or more integers. 
  The common multiples of 3 and 4 are 0, 12, 24, .... 
  The least common multiple (LCM) of two numbers is the smallest number (not zero) 
  that is a multiple of both."
  
  Try writing two columns of multiples as a starting point:
  starting with 15 and 25 and keep writing their multiples until you find the lowest common one
  then turn this in to a step by step instruction
  15 25
  30 50
  45 75
  60
  75
  75 is the first common

  create a function feeds in two int, and return an int
  if two ints have same value, return int
  check which number is lower and multiply 

*/



const num1A = 1;
const num1B = 1;
const expected1 = 1;

const num2A = 5;
const num2B = 10;
const expected2 = 10;

const num3A = 10;
const num3B = 5;
const expected3 = 10;

const num4A = 6;
const num4B = 8;
const expected4 = 24;

const num5A = 15;
const num5B = 25;
const expected5 = 75;

/**
 * Add params if needed for recursion
 * Finds the lowest common multiple of the two given ints.
 * @param {number} a
 * @param {number} b
 * @returns {number} The lowest common multiple of the given ints.
 * create a function feeds in two int, and return an int
  if two ints have same value, return int
  check which number is lower and multiply 
 */
function lowestCommonMult(a, b,i=1) {
    if(a==b){
        return a
    }
    var lower_num = a
    var higher_num=b
    if(b>lower_num){
        lower_num=b
        higher_num=a
    }
    if(lower_num*i%higher_num==0){
        return lower_num*i
    }
    else{
        return lowestCommonMult(a,b,i+1)
    }
}
// console.log(lowestCommonMult(num1A,num1B))
// console.log(lowestCommonMult(num2A,num2B))
// console.log(lowestCommonMult(num3A,num3B))
// console.log(lowestCommonMult(num4A,num4B))
// console.log(lowestCommonMult(num5A,num5B))


// ************************************************************************

/* 
  Binary String Expansion
  You are given a STRING containing chars "0", "1", and "?"
  For every "?" character, either "0" or "1" can be substituted.
  Write a recursive function to return array of all valid strings with "?" chars expanded to "0" or "1". 
*/

const two_str1 = "1?0?";
const two_expected1 = ["1000", "1001", "1100", "1101"];
// output list order does not matter

/**
 * Add params if needed for recursion
 * Expands a string such that each "?" in the given string will be replaced
 * with a "0" and a "1".
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string containing to expand.
 * @returns {Array<string>} The expanded versions of the given string.
 * 
 * create a function feeds in a strin and return an array of strings
 * 
 */

// console.log(random_str(two_str1))
var tst ="1111"
// tst_str=tst
// console.log(tst.indexOf("?"))

function random_str(str){
    var temp_arr=str.split("")
    while(temp_arr.indexOf("?")!=-1){
        var rand=Math.floor(Math.random()*2)
        temp_arr[temp_arr.indexOf("?")]=rand.toString()
    }
    return temp_arr.join('')
}

function binaryStringExpansion(str,arr=[]) {
    if(arr.length==4){
        return arr
    }
    while(!arr.includes(random_str(str))){
        arr.push(random_str(str))
    }
    return binaryStringExpansion(str,arr)
}
console.log(binaryStringExpansion(two_str1))
// console.log(two_str1.indexOf("?"))