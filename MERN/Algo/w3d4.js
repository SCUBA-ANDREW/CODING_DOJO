/*
  Given an array of ailments (illnesses), and an array of medication objects that have a nested array of treatedSymptoms
  return the medication name(s) that treats the most given symptoms
*/

const medications = [
    {
        name: "Sulforaphane",
        treatableSymptoms: [
            "dementia",
            "alzheimer's",
            "inflammation",
            "neuropathy",
        ],
    },
    {

        name: "Longvida Curcumin",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "depression",
            "arthritis",
            "anxiety",
        ],
    },
    {
        name: "Hericium erinaceus",
        treatableSymptoms: [
            "anxiety",
            "cognitive decline",
            "depression"],
    },
    {
        name: "Nicotinamide mononucleotide",
        treatableSymptoms: [
            "ageing",
            "low NAD",
            "obesity",
            "mitochondrial myopathy",
            "diabetes",
        ],
    },
    {
        name: "PainAssassinator",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "cramps",
            "headache",
            "toothache",
            "back pain",
            "fever",
        ],
    },
];


/*
Input: ["pain"], medications
Output: ["PainAssassinator", "Longvida Curcumin"]
*/

/*
Input: ["pain", "inflammation", "depression"], medications
Output: ["Longvida Curcumin"]
*/

/*
Input: ["existential dread"], medications
Output: []
*/

// HINTS:
// Loop through first array to check the medicine
// then loop through second array to see if the symptoms match the inputted symptoms
// if they match add them into a new array at the end return array
// edge case if no matches return null
function webMD(ailments, meds) {
    let fin=[];//for return array
    let rightMedCount = [];//temp storing the match sym count
    let inCase=0;//in case nothing matches
    for (med of meds) {//loop through every med in the medication list/array
        let countSym = 0;//temp counting matching symptons per med
        // console.log(med);
        for (sym of med.treatableSymptoms) {//loop thorugh all the treatable syptoms for each med
            for (key of ailments) {//loop trhough all the syptoms given in ailments
                if (sym == key) {//check if sympton matches 
                    countSym++;
                }
            }
        }
        rightMedCount.push(countSym);
        inCase+=countSym;
    }
    if(inCase==0){//in
        return [];
    }
    let hIdx = 0;
    let hVal=0;
    for(let i=0;i<rightMedCount.length;i++){
        if(rightMedCount[i]>hVal){
            hIdx=i;
            hVal=rightMedCount[i];
        }
    }
    for(let j=0;j<rightMedCount.length;j++){
        if(rightMedCount[j]==hVal){
            fin.push(meds[j].name)
        }
    }
    return fin;


}

function webMD2(ailments,meds){
    let fin=[];
    for(sym of ailments){
        console.log(sym);
        for(med of meds){
            console.log(med.treatableSymptoms);
            if(med.treatableSymptoms.hasOwnProperty(sym)){
                console.log("yes");
            }
        }

    }
}

console.log(webMD(["pain"], medications));
console.log(webMD(["pain", "inflammation", "depression"], medications));
console.log(webMD(["existential dread"], medications));

// console.log(webMD2(["pain"], medications));
// console.log(webMD2(["pain", "inflammation", "depression"], medications));
// console.log(webMD2(["existential dread"], medications));