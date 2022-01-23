/* 
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

// const str1 = "Y(3(p)p(3)r)s";
// const expected1 = true;

// const str2 = "N(0(p)3";
// const expected2 = false;
// // Explanation: not every parenthesis is closed.

// const str3 = "N(0)t ) 0(k";
// const expected3 = false;
// // Explanation: because the second ")" is premature: there is nothing open for it to close.

// const str4 = "a(b))(c";
// const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 */
// create a function that feeds in a string
function parensValid(str) {
    // Your code here
    // create two variable - one to ensure there are same amount of open/close brackets , another one to ensure ends at close bracket
    var bracket_even=0
    var bracket_ends_at=0
    // iterate through the string
    for(var i=0; i<str.length;i++){
        if(str[i]=='('){
            // console.log("test")
            bracket_even+=1
            bracket_ends_at=1
        }
        else if(str[i]==")"){
            bracket_even-=1
            bracket_ends_at=0
        }
    }
    // return true/false
    if(bracket_ends_at==0 && bracket_even==0){
        return true
    }
    else{
        return false
    }
}

// console.log(parensValid(str4))
/* 
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const str3 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expected3 = true;

const str4 = "D(i{a}l[ t]o)n{e";
const expected4 = false;

const str5 = "A(1)s[O (n]0{t) 0}k";
const expected5 = false;

// /**
//  * Determines whether the string's braces, brackets, and parenthesis are valid
//  * based on the order and amount of opening and closing pairs.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} str
//  * @returns {boolean} Whether the given strings braces are valid.
//  */

// create a function that feeds in a string
// 
function bracesValid(str) {
    // create a variable to track the newest added open bracket type
    var bracket_type=[]
    // iterate through the string
    for(var i=0; i<str.length;i++){
        if(str[i]=='('){
            bracket_type.push("(")
        }
        else if(str[i]==")"){
            if(bracket_type[bracket_type.length-1]=="("){
                bracket_type.pop()
            }
        }
        if(str[i]=='['){
            bracket_type.push("[")
        }
        else if(str[i]=="]"){
            if(bracket_type[bracket_type.length-1]=="["){
                bracket_type.pop()
            }
        }
        if(str[i]=='{'){
            bracket_type.push("{")
        }
        else if(str[i]=="}"){
            if(bracket_type[bracket_type.length-1]=="{"){
                bracket_type.pop()
            }
        }
    }
    // return true/false
    if(bracket_type.length==0){
        return true
    }
    else{
        return false
    }
}

console.log(bracesValid(str4))

