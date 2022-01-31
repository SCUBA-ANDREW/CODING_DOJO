/* 
  Array: Mode
  
  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.
    - What if there are multiple items that occur the same number of time?
        - return all of them (in an array)
    - what if all items occur the same number of times?
        - return empty array
*/

const nums1 = [];
const expected1 = [];

const nums2 = [1];
const expected2 = [1];

const nums3 = [5, 1, 4];
const expected3 = [];

const nums4 = [5, 1, 4, 1];
const expected4 = [1];

const nums5 = [5, 1, 4, 1, 5];
const expected5 = [5, 1];
//  - order doesn't matter

/**
 * Finds the mode or all modes if there are more than one. The mode is the
 *    value which occurs the most times in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Test
 * @returns {Array<number>} Mode or modes in any order.
 */
// create a function feeds in an array
// create a variable for frequency table(array)
// iterate through the array
// obeject(objects)


function mode(nums) {
    if(nums.length<=1){
        return nums
    }
    var variable = {}
    var temp=0
    var fin=[]
    for(var i=0;i<nums.length;i++){
        if(variable.hasOwnProperty(nums[i])){
            variable[nums[i]]++
        }
        else{
            variable[nums[i]]=1
        }
    }
    for(key in variable){
        if(variable[key]>temp){
            temp=variable[key]
        }
    }
    var count=0
    for(key in variable){
        count+=1
        if(variable[key]==temp){
            fin.push(parseInt(key))
        }
    }
    if(count==fin.length){
        return []
    }
    return fin
}

console.log(mode(nums1))
console.log(mode(nums2))
console.log(mode(nums3))
console.log(mode(nums4))
console.log(mode(nums5))