// A digital root is the recursive sum of all the digits in a number. 
//Given n, take the sum of the digits of n. If that value has more than one digit, 
//continue reducing in this way until a single-digit number is produced. 
//This is only applicable to the natural numbers.

function digital_root(n){

  var sum = 0
  var nArray = n.toString().split('');
  if(nArray.length === 1){
    return parseInt(nArray[0]); 
  }
  for(var digitIndex = 0; digitIndex < nArray.length; digitIndex++ ){
    sum += parseInt(nArray[digitIndex]);
  }
  return digital_root(sum);
}

digital_root(12345)

function digital_root(n) {
  return (n - 1) % 9 + 1;
}