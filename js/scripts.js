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
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));

// alert("Added, they are: " + add(number1, number2));
// alert("Subtracted, they are: " + sub(number1, number2));







var sentence = prompt("gimme sentence");

var capitalizeFirstLast = function(sentence) {
  var middleString = sentence.slice(1, (sentence.length-1))
  var bigFirstLetter = sentence[0].toUpperCase();
  var bigLastLetter = sentence[sentence.length -1].toUpperCase();
  return bigFirstLetter + middleString + bigLastLetter;
}

var reverseFirstLast = function(sentence) {
  var middleString = sentence.slice(1, (sentence.length-1))
  var bigFirstLetter = sentence[0];
  var bigLastLetter = sentence[sentence.length -1];
  return bigLastLetter + middleString + bigFirstLetter;
}

alert(reverseFirstLast(capitalizeFirstLast(sentence)));

alert(sentence[(Math.floor(sentence.length/2))]);
