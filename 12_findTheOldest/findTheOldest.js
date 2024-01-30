const findTheOldest = function(arr) {
	const currentYear = new Date().getFullYear();
	return arr.reduce((oldest, next) => {
		if(!oldest.age){
			oldest.age = (oldest.yearOfDeath ?? currentYear ) - oldest.yearOfBirth;
		}
		if(!next.age){
			next.age = (next.yearOfDeath ?? currentYear ) - next.yearOfBirth;
		}

		return oldest.age > next.age ? oldest : next;
	});	
};

// Do not edit below this line
module.exports = findTheOldest;
