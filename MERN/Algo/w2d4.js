// https://leetcode.com/problems/two-sum/

// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have EXACTLY ONE SOLUTION,
// and you may not use the same element twice.

// the array is unsorted, contains no floats, and there may be duplicate values

// Given arr = [2, 11, 7, 15], target = 9,
// Because arr[0] + arr[2] = 2 + 7 = 9
// return [0, 2].

// example 1
// given: [2, 11, 7, 15]
// target: 9
// output: [0,2]

// example 2
// given: [3,2,4]
// target: 6
// output: [1,2]

// example 3
// given: [3,3]
// target: 6
// output: [0,1]

function twoSums(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < target) {
            let tempArr = [i];
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] + arr[j] == target) {
                    tempArr.push(j);
                    return tempArr;
                }
            }
        }
    }
}

function twoSums2(arr, target) {
    let r1 = 0;
    let r2 = 1;
    let tempArr = [];
    let ind = false;
    while (!ind) {
        if (r2 == arr.length) {
            r1++;
            r2 = r1 + 1;
        } else if (r1 == arr.length - 1) {
            ind = true;
            console.log("can't find twoSum index");
        }
        else {
            if (arr[r1] + arr[r2] == target) {
                tempArr.push(r1);
                tempArr.push(r2);
                return tempArr;
            } else {
                r2++
            }
        }
    }
}


console.log(twoSums2([2, 11, 7, 15], 9)); // [0,2]
console.log(twoSums2([3, 2, 4], 6)); // [1,2]
console.log(twoSums2([3, 3], 6)); // [0,1]
