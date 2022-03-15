/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const arrA1 = [0, 1, 2, 2, 2, 7];
const arrB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const arrA2 = [0, 1, 2, 2, 2, 7];
const arrB2 = [2, 2];
const expected2 = [2];

const arrA3 = [0, 1, 2, 2, 2, 7];
const arrB3 = [10];
const expected3 = [];

/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(n) linear, n = max(sortedA.length, sortedB.length) when there are
 *    dupes we may end up looping over all items of longer arr.
 * - Space: O(n) linear, n = shorter array length.
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} returns The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(sortedA, sortedB) {
    let fin = [];
    for (let i = 0; i < sortedA.length; i++) {
        if (!fin.includes(sortedA[i])) {
            for (let j = 0; j < sortedB.length; j++) {
                if (sortedA[i] == sortedB[j]) {
                    fin.push(sortedA[i]);
                    break;
                }
            }
        }
    }
    return fin;
}
// const arrA1 = [0, 1, 2, 2, 2, 7];
// const arrB1 = [2, 2, 6, 6, 7];
function order2(arr1,arr2){
    let fin=[];
    let a=0;
    let b=0;
    while(a<arr1.length&&b<arr2.length){
        if(arr1[a]==arr2[b]){
            if(!fin.includes(arr1[a])){
                fin.push(arr1[a]);
            }
            a++;
            b++;
        }
        else if(arr1[a]<arr2[b]){
            a++;
        }
        else if(arr2[b]<arr1[a]){
            b++;
        }
    }
    return fin;
}

console.log(order2(arrA3,arrB3));

// console.log(orderedIntersection(arrA3,arrB3));