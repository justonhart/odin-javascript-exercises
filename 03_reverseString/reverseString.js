const reverseString = function(string) {
	let returnVal = "";
	for(let i = 0; i < string.length; i++){
		returnVal += string[string.length - 1 - i];
	}
	return returnVal;
};

// Do not edit below this line
module.exports = reverseString;
