/* 
  Given two arrays, interleave them into one new array.
  The arrays may be different lengths. The extra items should be added to the
  back of the new array.
*/

const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected1 = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected2 = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected3 = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected4 = [42, 0, 6];

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 */

// create a function feeds in two array
// create a array variable for final outcome
// check which array is longer -> turn the longer length as an int variable
// iterate through the longer length
// push index value into the fin_outcome variable
function interleaveArrays(arr1, arr2) {
    var fin_outcome=[]
    // var temp_lengh=0
    if(arr1.length>arr2.length){
        for(var i=0;i<arr1.length;i++){
            if(i<arr2.length){
                fin_outcome.push(arr1[i])
                fin_outcome.push(arr2[i])
            }
            else{
                fin_outcome.push(arr1[i])
            }
        }
    }
    else if(arr2.length>arr1.length){
        for(var i=0;i<arr2.length;i++){
            if(i<arr1.length){
                fin_outcome.push(arr1[i])
                fin_outcome.push(arr2[i])
            }
            else{
                fin_outcome.push(arr2[i])
            }
        }
    }
    else{
        for(var i=0;i<arr1.length;i++){
                fin_outcome.push(arr1[i])
                fin_outcome.push(arr2[i])
        }
    }
    return fin_outcome
}


// console.log(interleaveArrays(arrA4,arrB4))

/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
  Bonus (alumni interview): 
    first complete it without the bonus, because they ask for additions
    after the initial algo is complete
    return how many times the given number occurs
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
// const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
// const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
// const expected3 = true;

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 2;
// const expected4 = 4;

/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the given num exists in the given array.
 */

// create a function feeds in an array and a search key
// 
function binarySearch(sortedNums, searchNum) {
    var left=0
    var right = sortedNums.length-1
    var i = Math.floor((left+right)/2)
    var found =false
    while(sortedNums[i]!=searchNum && count<sortedNums.length){
        if(sortedNums[i]>searchNum){
            i=Math.floor(i/2)
            count+=1
        }
        else if(sortedNums[i]<searchNum){
            i = Math.ceil((sortedNums.length+i)/2)
            count+=1
        }
        // else if(sortedNums[i]==searchNum){
        //     return true
        // }
        // else if(i==sortedNums.length&&sortedNums[i]!=searchNum){
        //     return false
        // }
        // else if(i==0)
    }
    if(count==sortedNums.length){
        return false
    }
    else{
        return true
    }
}

console.log(binarySearch(nums1.searchNum1))
// console.log(nums1.length/2)