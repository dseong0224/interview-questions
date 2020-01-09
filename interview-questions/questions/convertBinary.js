// Transforming Words into Binary Strings
// Write a function that transforms all letters from [a, m] to 0 and letters from [n, z] to 1 in a string.

// Examples
// convertBinary("house") ➞ "01110"

// convertBinary("excLAIM") ➞ "0100000"

// convertBinary("moon") ➞ "0111"
// Notes
// Conversion should be case insensitive (see example #2).

function convertBinary(str) {
	let answer = "";
	for(let charIndex = 0; charIndex < str.length; charIndex++ ){
		if( str.toLowerCase()[charIndex] < 'n' ){
			answer+= "0" 
		} else {
			answer+= "1"
		}
	} 
	return answer
}