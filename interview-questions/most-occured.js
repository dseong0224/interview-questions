//takes in an array of integers
//returns the number that orrures most often

function mostOccured(array){
  var map = {};
  for(var i=0; i<array.length; i++){
    map[array[i]] = 0;
    if(map.hasOwnProperty(map[array[i]])){
      map[array[i]]++
    }
  } 
  console.log("map: ", map)
  return map
}

mostOccured([1,2,3,4,1,2,1])