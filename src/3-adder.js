const numberStuff = require('./numberStuff')

function sumNumbersString(numbersString) {
  const numbers = numbersString
    .split('+')
    .map(string => parseFloat(string))

  return numberStuff.sum(numbers)
}

// multipleNumbersString - multiplies a number string
function multipleNumbersString(numberString) {
  const numbers = numberString.split('*').map(string => parseFloat(string))
  return numberStuff.multiply(numbers)
}

// Another option to add/multiply/etc a number string
function evaluateAnyOperationNumberString(numberString) {
  return eval(numberString)
}

console.log(numberStuff.sum([12, 5])) // => 17
console.log(numberStuff.sum([5, 7, 1])) // => 13
console.log( '-----' )
console.log(sumNumbersString('12 + 5')) // => 17
console.log(sumNumbersString('5 + 7 + 1')) // => 13
console.log(sumNumbersString('1 + 2 + 3 + 4 + 5')) // => 15


/*

Challenges:
1. Add `multiple` and `multipleNumbersString` functions that multiply instead of adding, with example usage

*/

console.log( '-----' )
console.log(numberStuff.multiply([12, 5])) // => 60
console.log(numberStuff.multiply([5, 7, 1])) // => 35
console.log( '-----' )
console.log(multipleNumbersString('12 * 5')) // => 60
console.log(multipleNumbersString('5 * 7 * 1')) // => 35
console.log(multipleNumbersString('1 * 2 * 3 * 4 * 5')) // => 15