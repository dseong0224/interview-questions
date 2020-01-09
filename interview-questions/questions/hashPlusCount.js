// Hashes and Pluses
// Create a function that returns the number of hashes and pluses in a string.

// Examples
// hashPlusCount("###+") ➞ [3, 1]

// hashPlusCount("##+++#") ➞ [3, 3]

// hashPlusCount("#+++#+#++#") ➞ [4, 6]

// hashPlusCount("") ➞ [0, 0]
// Notes
// Return [0, 0] for an empty string.
// Return in the order of [hashes, pluses].


function hashPlusCount(str) {
	let hashCount = 0;
	let plusCount = 0;
	let count = [hashCount,plusCount];
	for(let i = 0; i < str.length; i++){
		if(str[i] === '#'){
			count[0]++;
		} else if (str[i] === '+'){
			count[1]++;
		}
	}
	return count
}

// const hashPlusCount = str => [
//   (str.match(/#/g) || []).length,
//   (str.match(/\+/g) || []).length,
// ];