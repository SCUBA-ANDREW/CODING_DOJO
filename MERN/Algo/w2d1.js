// given two sorted arrays that may have duplicate values, merge them and remove any duplicates
//          a
var arr1 = [1, 3, 3, 5, 8, 10];
//          b
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10,];

function mergeDedupe(arr1, arr2) {
    let longerArr = arr1;
    let shortArr = arr2;
    if (arr2.length > arr1.length) {
        longerArr = arr2;
        shortArr = arr1;
    }
    let resultArr = [];
    let runnerLong = 0;
    let runnerShort = 0;

    while (runnerLong < longerArr.length || runnerShort < shortArr.length) {
        if (longerArr[runnerLong] >= shortArr[runnerShort]) {
            if (!resultArr.includes(shortArr[runnerShort])) {
                resultArr.push(shortArr[runnerShort]);
                runnerShort++;
            }
            else if (resultArr.includes(shortArr[runnerShort])) {
                runnerShort++;
            }
        }
        else {
            if (!resultArr.includes(longerArr[runnerLong])) {
                resultArr.push(longerArr[runnerLong]);
                runnerLong++;
            }
            else if (resultArr.includes(longerArr[runnerLong])) {
                runnerLong++;
            }
        }
    }
    return resultArr;
}

function mergeSort(arr1, arr2) {
    let fin = [];
    let a = 0;
    let b = 0;
    let longA = arr1;
    let shortA = arr2;
    if (arr2.length > arr1.length) {
        longA = arr2;
        shortA = arr1;
    }

    while (a < longA.length || b < shortA.length) {
        if (longA[a] >= shortA[b]) {
            if (!fin.includes(shortA[b])) {
                fin.push(shortA[b]);
            }
            b++;
        }
        else {
            if (!fin.includes(longA[a])) {
                fin.push(longA[a]);
            }
            a++;
        }
    }
    return fin;

}

// try out some other tests
mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]) // [ 1, 3, 4, 5, 8, 10 ]
mergeDedupe([2, 3, 3, 5, 8, 10, 12], [1, 3, 4, 6]) // [1, 2, 3, 4, 5, 6, 8, 10, 12]

// //   a -> 
//     [1, 3, 3, 5, 8, 10]
// //   b
//     [1, 3, 4, 5]

// console.log(mergeDedupe([1, 3, 3, 5, 8, 10],[1, 3, 3, 5, 8, 10, 10, 10]));
// console.log(mergeDedupe([2,3,3,5,8,10,12], [1,3,4,6]));
// console.log(mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]));
console.log(mergeSort(arr1, arr2));