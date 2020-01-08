function getAbsSum(arr) {
	let absArr = arr.map(num => Math.abs(num))
	let total = null;
	for(let i=0; i < absArr.length; i++){
		total += absArr[i]
	}
	return total
}