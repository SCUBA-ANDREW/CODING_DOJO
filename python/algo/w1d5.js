/* 
  Zip Arrays into Map
  Given two arrays, create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.
  Associative arrays are sometimes called maps because a key (string) maps to a value 
 */

  const keys1 = ["abc", 3, "yo"];
  const vals1 = [42, "wassup", true];
  const expected1 = {
    abc: 42,
    3: "wassup",
    yo: true,
  };
  
  const keys2 = ["abc", 3, "yo", "bob"];
  const vals2 = [42, "wassup", true];
  const expected2 = false
  
  
  /**
   * Converts the given arrays of keys and values into an object.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Array<string>} keys
   * @param {Array<any>} values
   * @returns {Object} The object with the given keys and values.
   */
  
//   create a funciton feeds in keys and values
function zipArraysIntoMap(keys, values) {
//   create a variable - dictionary to hold final outcome
    var final_outcome={}
//   if statement to check if key's length and value's length matched, if not: return false
    if(keys.length!=values.length){
        return false
        }
    else{
//   iterate through the length of keys/values, add keys and values into the dictionary
        for(var i=0;i<keys.length;i++){
            final_outcome[keys[i]]=values[i]
            }
        }
//   return the final outcome
    return final_outcome
}
//   console.log(zipArraysIntoMap(keys2,vals2))
/* 
  Invert Hash
  A hash table / hash map is an obj / dictionary
  Given an object / dict,
  return a new object / dict that has the keys and the values swapped so that the keys become the values and the values become the keys
*/

const two_obj1 = { name: "Zaphod", charm: "high", morals: "dicey" };
const two_expected1 = { Zaphod: "name", high: "charm", dicey: "morals" };

const two_obj2 = { name: "Zaphod", charm: "high", morals: "dicey", character: 'dicey' };
// Or create a system that askes the end user what key they want to keep.
const two_expected2 = { Zaphod: "name", high: "charm", dicey: ["morals", "character"] };

const two_obj3 = { name: "Zaphod", charm: "high", morals: "dicey", character: null };

const two_obj4 = { name: "Zaphod", charm: "high", morals: "dicey", character: null , test:null};
// const two_expected3 = false;
// const two_expected3 = { Zaphod: "name", high: "charm", dicey: "morals", 'unknown': character };

/**
 * Inverts the given object's key value pairs so that the original values
 * become the keys and the original keys become the values.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object<string, string>} obj An object with string keys and string values.
 * @return The given object with key value pairs inverted.
 */

//   create a function feeds in dictionary
//   create a dictionary variable to hold final outcome
//   iterate through all values, add them into the variable in step2
//   check if there's any null value, if so - make the key unknown. if there's redundant keys, make a list to contain values
//   return final outcome
function invertObj(obj) {
    var fin_outcome={}
    // for(var i = 0;i<Object.keys(obj).length;i++){
    //     if(obj[i]==null){
    //         fin_outcome['unkown']=Object.keys[i]
    //     }
    // }
for (let [key, value] of Object.entries(obj)) {
    if(value in fin_outcome){
        if(value==null){
            var temp=[fin_outcome['unknown']]
            temp.push(key)
            fin_outcome['unknown']=temp
        }
        else{
            var temp=[fin_outcome[value]]
            temp.push(key)
            fin_outcome[value]=temp
        }
    }
    else if(value==null){
        fin_outcome['unknown']=key
    }
    else{
        fin_outcome[value]=key
    }
    }
    return fin_outcome
}

console.log(invertObj(two_obj4))