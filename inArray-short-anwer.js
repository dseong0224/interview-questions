//Given two arrays of strings a1 and a2 return a sorted array r in 
//lexicographical order of the strings of a1 which are substrings of strings of a2.

function inArray(array1,array2){
  var answer = [];
  for(var array1Index = 0; array1Index < array1.length; array1Index++){
    var currentString = array1[array1Index];
    for(var array2Index = 0; array2Index < array2.length; array2Index++){
      var comparatorSting = array2[array2Index]
      if(comparatorSting.includes(currentString)){
        answer.push(currentString);
      }
    }
  }
  
  console.log("answer: ", answer);
  return answer
}

inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"])