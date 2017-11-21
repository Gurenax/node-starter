function sum(numbers) {
  let total = 0
  numbers.forEach(number => {
    total = total + number
  })
  return total
}

// multiply - multiplies array of numbers
function multiply(numbers) {
  return numbers.reduce( (product, value) => {
    return product * value
  })
}

module.exports = { sum, multiply }