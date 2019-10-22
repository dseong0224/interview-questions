// Count the number of Duplicates
// Write a function that will return the count of distinct case
// -insensitive alphabetic characters and numeric digits that occur more than once in the input string. 
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
  var lowerCasedText = text.toLowerCase();
  var stringArray = lowerCasedText.split('');
  var answerArray = [];
  for (var charIndex = 0; charIndex < stringArray.length; charIndex++) {
    var repeat = 0;
    for(var comparator = 0; comparator < stringArray.length; comparator++){
      if(stringArray[charIndex] === stringArray[comparator]){
        repeat++;
      if(repeat > 1 && !answerArray.includes(stringArray[charIndex]))
        answerArray.push(stringArray[charIndex]);
      }    
    }
  }
  return answerArray.length
}

duplicateCount('hholkjhj');



