// The goal of this exercise is to convert a string to a new string 
//where each character in the new string is 
//"(" if that character appears only once in the original string, or ")" 
//if that character appears more than once in the original string. 
//Ignore capitalization when determining if a character is a duplicate.


function duplicateEncode(word){
  var wordArray = word.split(''); //['h','e','l','l','o']
  for(var currentChar = 0; currentChar < wordArray.length; currentChar++){

    for(var comparator = 0 ; comparator < wordArray.length; comparator++){
      var indexOfCurrentChar = wordArray.indexOf(wordArray[currentChar])
      if(wordArray[comparator] === wordArray[indexOfCurrentChar]){
        console.log("match", wordArray[comparator])
        wordArray[comparator] = '('
      }
    }
  }
  
  var answer = wordArray.join('');
  console.log("answer", answer);
  return answer;
}

duplicateEncode('hello')