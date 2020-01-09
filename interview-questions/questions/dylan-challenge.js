// Write a method, sum, that can work with both syntax below.

// sum(1,2); // => 3;
// sum(1)(2); // => 3;

function sum(a,b){
  if(!isNaN(a) && !isNaN(b)){
    return a + b 
  } else if (!isNaN(a) && b === undefined){
    return function(b){
      return a + b
    }
  }
}

console.log(sum(3,5));
console.log(sum(3)(5));