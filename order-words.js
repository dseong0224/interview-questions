function order(words){
  
  var commaSeparatedWordsArray = words.split(' ');
  var ComparedWordIndex = 0;
  var numberInPreviousWord = parseInt(commaSeparatedWordsArray[ComparedWordIndex],10);
  
  for( var wordIndex = ComparedWordIndex; wordIndex < commaSeparatedWordsArray.length; wordIndex++){
  
    var numberInCurrentWord = parseInt(commaSeparatedWordsArray[wordIndex],10);
    
    if(numberInCurrentWord < numberInPreviousWord){ 
    commaSeparatedWordsArray[ComparedWordIndex] = commaSeparatedWordsArray[wordIndex];
    }
    
    ComparedWordIndex++;
  }
  
  
  return commaSeparatedWordsArray.join(' ')
  
}