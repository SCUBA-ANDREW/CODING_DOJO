/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/

    Given to a Coding Dojo alumni by Riot Games.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/
//                   v
const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

// step 1:
frequencyMap = {}
// step 2:
// extract [keys? values? something?]
// if it's an array -> sort
// ["b70", "a84", "c42"]

// step 3:
// return a string

// hints:
// parseInt(str)
// isNaN(x)
// myObj.hasOwnProperty("key")

function rehash(str) {
    let result = "";
    let tempDic = {};
    let NS = 0; //number starts
    let NE = 0; //number ends
    tempKey = "";
    let tempVal = 0;
    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i])) {
            if (!tempDic.hasOwnProperty(str[i])) {
                tempDic[str[i]] = 0;
            }
            if (tempKey !== "") {
                NE = i;
                tempVal = parseInt(str.slice(NS, NE));
                tempDic[tempKey] += tempVal;
            }
            tempKey = str[i];
            NS = i + 1;
        }
        if (i == str.length - 1) { //at the end of the loop
            NE = i + 1;
            tempVal = parseInt(str.slice(NS, NE));
            tempDic[tempKey] += tempVal;
        }
    }
    // sorting the obkect by keys
    let sorted = Object.keys(tempDic).sort().reduce(
        (obj, key) => {
            obj[key] = tempDic[key];
            return obj;
        },
        {}
    );
        //adding keys and values to result variable
    for (key in sorted) {
        result += key;
        result += sorted[key];
    }
    console.log(result);
    return result;
}

rehash(str1);
console.log(rehash(str1) === expected1, "<-- should be \"true\"");