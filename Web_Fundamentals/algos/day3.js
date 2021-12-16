// Functions

// 1. DEFINE THE FUNCTION
function add(num1, num2){
    return num1+num2 //parameter
}

// 2. CALL THE FUNCTION
console.log(add(4,9))//argument

// PARAMETER AND ARGUMENTS
// for loop needs semi-column at the end of the line

function mutiply(num1, num2){
    return num1*num2 //need return otherwise it's undefined
    //The return statement ends function execution and specifies a value to be returned to the function caller.
    //The expression whose value is to be returned. If omitted, undefined is returned instead.


}

console.log(mutiply(435423,4534))

//DEFINING THE FUNCTION
function hello(){
    console.log("Hello")
    for(var i=0;i<5;i++){
        console.log(i)
    }
}
//CALLING THE FUNCTION
hello()


// -----------------------------
var x=5;

function setX(newValue){//js reach outside of this function and grab variable x----one of the weird thing in js, see comment below for the proper way to write the code
    x=newValue //return newValue
}

console.log(x);
setX(15); //x = setX(15)
console.log(x);

//return statement
//1. return can only return one thing
//2. return statement immediately stops the function

// ----------------
var x=5;
function addToX(amount){
    return x+amount;
    console.log("hello there");
}

console.log(x)
var result = addToX(-10);
console.log(result);
console.log(x);

//Functions:
//1. should not mutate information
