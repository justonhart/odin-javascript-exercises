const add = function(...args) {
	return args.reduce((sum, next) => sum + next, 0);
};

const subtract = function(...args) {
	return args.reduce((diff, next) => diff - next);
};

const sum = function(args) {
	return args.reduce((sum, next) => sum + next, 0);
};

const multiply = function(args) {
	return args.reduce((result, next) => result * next);
};

const power = function(x, y) {
	return Math.pow(x, y);
};

const factorial = function(x) {
	if(x === 0 || x === 1){
		return 1;
	}

	return x * factorial(x-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
