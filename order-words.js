function order(words){
  
  var wordsArray = words.split(' ');
  
  var answerArray = [];
  var posArray = [1,2,3,4,5,6,7,8,9];
  for(var wordPos = 0; wordPos < posArray.length; wordPos++){
    for( var wordIndex = 0; wordIndex < wordsArray.length; wordIndex++){
    if(wordsArray[wordIndex].includes(posArray[wordPos])){
      answerArray.push(wordsArray[wordIndex]);
    }
  }
  }
  var answer = answerArray.join(' ')
  return answer
}

order("is2 Thi1s T4est 3a")