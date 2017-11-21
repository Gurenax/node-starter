function sum(numbers) {
  let total = 0
  numbers.forEach(number => {
    total = total + number
  })
  return total
}

console.log(sum([12, 5])) // => 17
console.log(sum([5, 7, 1])) // => 13


function sumNumbersString(numbersString) {
  const numbers = numbersString
    .split('+')
    .map(string => parseFloat(string))

  return sum(numbers)
}


console.log(sumNumbersString('12 + 5')) // => 17
console.log(sumNumbersString('5 + 7 + 1')) // => 13
console.log(sumNumbersString('1 + 2 + 3 + 4 + 5')) // => 15


/*

Challenges:
1. Add `multiple` and `multipleNumbersString` functions that multiply instead of adding, with example usage

*/

console.log( '-----' )
// multiple - multiplies number
const multiple = numbers => {
  return eval(numbers.join('*'))
}

console.log(multiple([12, 5])) // => 60
console.log(multiple([5, 7, 1])) // => 35

// multipleNumbersString - multiplies a number string
const multipleNumbersString = numberString => {
  return eval(numberString)
}
console.log( '-----' )
console.log(multipleNumbersString('12 * 5')) // => 60
console.log(multipleNumbersString('5 * 7 * 1')) // => 35
console.log(multipleNumbersString('1 * 2 * 3 * 4 * 5')) // => 15