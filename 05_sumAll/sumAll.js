// Note, I've written this recursively as a challenge to myself to remember how to do recursion, not because it's necessarily a good idea
const sumAll = function(start, end) {
	if(typeof start != "number" || typeof end != "number" || start < 0 || end < 0){
		return "ERROR"
	}

	function recurse(start, endCase){
		if(start === endCase){
			return start;
		} 
		return start + recurse(start + 1, endCase);
	}

	if(start > end){
		return recurse(end, start);
	}

	return recurse(start, end);
};

// Do not edit below this line
module.exports = sumAll;
