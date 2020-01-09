//Given two arrays of strings a1 and a2 return a sorted array r in 
//lexicographical order of the strings of a1 which are substrings of strings of a2.

//#Example 1: 
//a1 = ["arp", "live", "strong"]
//a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
//returns ["arp", "live", "strong"]

function inArray(array1,array2){//O(N^2)
  // debugger;
  //loop through array1 within array2 to find a match
  //if there is a substring push that that item into answer array
  let answerArray = [];
  for(let i=0; i < array1.length; i++){
    for(let j=0; j < array2.length; j++){
      //if there is a substring and that substring isn't in the answer array yet
      if(array2[j].indexOf(array1[i]) != -1 && !answerArray.find(element => element === array1[i])){
        answerArray.push(array1[i])
      }
    }
  }
  console.log("answerArray:", answerArray)
  return answerArray.sort();
}

inArray(["arp", "live", "strong"],["lively", "alive", "harp", "sharp", "armstrong"])

function inArray(array1,array2){
  let answerArray = [];
  array2.filter(element => element)
  return answerArray;
}