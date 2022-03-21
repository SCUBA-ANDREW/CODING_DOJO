// // {OBJECTS}

// //                0       1         2             3
var animals = ["lion", "zebra", "elephant", "giraffe"];

// // 1
// for (let i=0; i<animals.length; i++) {
//     console.log(animals[i]);
// }

// // 2
// animals.map((animal) => console.log(animal));
// animals.forEach((animal) => console.log(animal));

// // 3
for (someElement of animals) {
    // console.log(someElement);
}

// // ---------------
// let = message = "hello";

// message[0]= "H"; // cannot do in strings

// for (let i =0; i<message.length; i++) {
//     console.log(message[i]);
// }
// for (someChar of message) {
//     console.log(someChar);
// }

// ----------------
const doggo = {
    name: "Spark",
    age: 8,
    favFood: "Scooby Snacks",
    canBark: true,
}

for (someKey in doggo) {
    // console.log(someKey, doggo[someKey]);
}

// 
const doggoKeys = Object.keys(doggo) // returns an array with all the keys in the doggo obj
// console.log(doggoKeys);

const doggoValues = Object.values(doggo); // returns an array with all the VALUES in the doggo obj
// console.log(doggoValues);

const doggoEntries = Object.entries(doggo); // returns a 2d array of key-value[]
// console.log(doggoEntries);

// check if a key exists in the Obj
doggo.hasOwnProperty("name") // returns T/F is a key exists
// console.log(doggo.hasOwnProperty("name")); // o(1) 

// findObjectsFilter(searchFor, itemsArr)

// given a 'search for' object with primitive values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items
const items = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "White", age: 31 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor1 = {
    firstName: "Bob",
    age: 31
};
// return a new list of objects containing the same key pair values
const output1 = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
    //   { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor2 = {
    lastName: "Smith",
};
const output2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

function findObjectsFilter(searchObj, items) {
    let tempArr = [];
    //loop throught the items
    for (itemKey of items) {
        //loop through the searchObj
        let flag = false
        for (searchKey in searchObj) {
            //check if searchObj matches the items, if so - pass it into the return array//or delete the one is not matching from the object
            if (itemKey.hasOwnProperty(searchKey) && itemKey[searchKey] == searchObj[searchKey]) {
                flag = false;
            } else {
                flag = true;
            }
        }
        if (!flag) {
            tempArr.push(itemKey);
        }
    }
    //reutrn the array
    return tempArr;
}

console.log(findObjectsFilter(searchFor1, items));
console.log(findObjectsFilter(searchFor2, items));
