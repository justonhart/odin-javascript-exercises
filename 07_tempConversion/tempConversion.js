const convertToCelsius = function(fahrenheit) {
	return Math.round((fahrenheit - 32) * 5 / 9 * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
	return Math.round((32 + (celsius * 9 / 5)) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
