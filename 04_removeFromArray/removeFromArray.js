const removeFromArray = function(arr, ...valuesToRemove) {
	let returnArr = [];

	arr.forEach(val => {
		if(!valuesToRemove.includes(val)){
			returnArr.push(val);
		}
	});
	return returnArr;
};

// Do not edit below this line
module.exports = removeFromArray;
