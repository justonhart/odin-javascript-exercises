const repeatString = function(string, num) {
	if(num < 0){
		return "ERROR";
	}
	let returnVal = "";
	for(let i = 0; i < num; i++){
		returnVal += string;
	}
	return returnVal;
};

// Do not edit below this line
module.exports = repeatString;
