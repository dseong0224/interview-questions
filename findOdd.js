// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  var answer
  for(var index = 0; index < A.length; index++){
    var repeat = 0;
    for(var comparator = 0; comparator < A.length; comparator++){
      if(A[index] === A[comparator]){
        repeat++;
      }
    }
    if(repeat%2 === 1){
      answer = A[index]
    }
  }
  return answer;
}

findOdd([1,1,1,1,1,1,1,4,4,5,5,6,6,7,7])

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);