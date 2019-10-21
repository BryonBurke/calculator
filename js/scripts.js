var add = function(number1, number2) {
  return number1 + number2;
};

var sub = function(number1, number2) {
  return number1 - number2;
};

var mult = function(number1, number2) {
  return number1 * number2;
};

var div = function(number1, number2) {
  return number1 / number2;
};

var getBmi = function(height, weight) {
  return weight/Math.sqrt(height);
}

var convertGalToLiter =  function(gallons){
  return gallons*3.78541;
}

var convertCelsiusToFarenheight = function(celsius){
  return (celsius*(9/5))+32;
}
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

alert("Added, they are: " + add(number1, number2));
alert("Subtracted, they are: " + sub(number1, number2));
