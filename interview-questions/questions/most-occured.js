//takes in an array of integers
//returns the number that orrures most often

function mode(array){
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0] 
    var maxCount = 1;
    for(var i = 0; i < array.length; i++){
        var el = array[i];
        if(!modeMap[el]){
          modeMap[el] = 1;
        } else {
          modeMap[el]++;
        }
              
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}

mode([1,2,3,4,1,2,1])