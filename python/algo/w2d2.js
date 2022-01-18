/* 
  Given an array of strings
  return a sum to represent how many times each array item is found (a frequency table)
  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not
    Python: key in dict
*/


const arr1 = ["a", "a", "a"];
const expected1 = {
  a: 3,
};

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
  a: 2,
  b: 1,
  c: 3,
  B: 1,
  d: 1,
};

const arr3 = [];
const expected3 = {};

/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @returns {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 */


// create a function feeds in an array
// create a variable return object
// iterate through the array, if array value is not present in the object-> add it into the object as key, with 1 as value
// if the value in array already existed in the object, the value of that key in object +1
// return the object
function frequencyTableBuilder(arr) {
    var object={}
    for(var i=0; i< arr.length;i++){
        if(object[arr[i]]==null){
            object[arr[i]]=1
        }
        else{
            object[arr[i]]+=1
        }
    }
    return object
}
// function frequencyTableBuilder(arr) {
//     var object={}
//     for(var i=0; i< arr.length;i++){
//         if(object.hasOwnProperty(arr[i])){
//             object[arr[i]]+=1
//         }
//         else{
//             object[arr[i]]=1
//         }
//     }
//     return object
// }



console.log(frequencyTableBuilder(arr1))
console.log(frequencyTableBuilder(arr2))
console.log(frequencyTableBuilder(arr3))
// *****************************************************************************

/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/



// const nums1 = [1];
// const expected1 = 1;

// const nums2 = [5, 4, 5];
// const expected2 = 4;

// const nums3 = [5, 4, 3, 4, 3, 4, 5];
// const expected3 = 4; // there is a pair of 4s but one 4 has no pair.

// const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
// const expected4 = 1;

// create function feeds in a array
// create a variable for final outcome
// utilize the previous function to iterate through the array
// iterate through the object and looking for any value that is odd, and return that key into the variable
// return variable

// function oddOccurrencesInArray(nums) {
//     var fin_outcome=0
//     var temp= frequencyTableBuilder(nums)
//     for(var key in temp){
//         if(temp[key]%2==1){
//             fin_outcome= +key
//         }
//     }
//     return fin_outcome
// }

function oddOccurrencesInArray(nums) {
    var fin_outcome=0
    var temp= frequencyTableBuilder(nums)
    for(var key in temp){
        if(temp[key]%2==1){
            fin_outcome= +key
        }
    }
    return fin_outcome
}



// console.log(typeof oddOccurrencesInArray(nums1))
// console.log(oddOccurrencesInArray(nums2))
// console.log(oddOccurrencesInArray(nums3))
// console.log(oddOccurrencesInArray(nums4))

