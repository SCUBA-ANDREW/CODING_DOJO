// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// inputs
// k = 16
// arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

// outputs
// [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are included in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0]
// ]

// create new arrays
// if no matches, return empty array

function findConsecutiveSums2(arr, k) { 
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j]
            if (sum === k) {
                output.push(arr.slice(i, j+1));
            }
        }
    }
    return output;
}

function findConsecutiveSums(arr, k) {
    let fin = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > k) {
            console.log(arr[i] + "is larger than the target");
        }
        else if (arr[i] == k) {
            fin.push([arr[i]]);
        }
        else {
            let runner = i;
            let tempArr = []
            let tempSum = 0
            while (runner < arr.length && tempSum <= k) {
                if (tempSum == k) {
                    // console.log(tempArr);
                    fin.push([...tempArr])
                    if (arr[runner] != 0) {
                        break;
                    }
                }
                tempArr.push(arr[runner]);
                tempSum += arr[runner];
                runner++
            }
        }
    }
    return fin;
}

console.log(findConsecutiveSums([2, 5, 3, 6, 7, 0, 0, 23, 11], 16));