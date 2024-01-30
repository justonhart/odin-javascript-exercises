/**
 * @param {string} string
 */
const palindromes = function (string) {
	//remove puntuation
	const cleanedString = string.replaceAll(',', '').replaceAll('.', '').replaceAll('!', '').replaceAll(' ', '').toLowerCase();
	console.log(cleanedString);
	let palindrome = true;
	for(let i = 0; i < cleanedString.length / 2; i++){
		if(cleanedString[i] != cleanedString[(cleanedString.length - i) - 1]){
			palindrome = false;
			i = cleanedString.length;
		}
	}

	return palindrome;
	
};

// Do not edit below this line
module.exports = palindromes;
