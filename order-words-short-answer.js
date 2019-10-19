function order(words){
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
      //a is the first value in the array
      //b is the second value in the array
      //once first val is compared against second val, 
      //a becomes the second val and b becomes third val
   }).join(' ');
}    