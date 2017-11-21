function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 1.8) + 32
}

let fahrenheit

// Monday

const mondayTemperature = 24
console.log(`On Monday it is ${mondayTemperature}°C`)
fahrenheit = convertCelsiusToFahrenheit(mondayTemperature)
console.log(`The Americans would think of that as ${fahrenheit}°F`)

// Tuesday

const tuesdayTemperature = 31
console.log(`On Tuesday it is ${tuesdayTemperature}°C`)
fahrenheit = convertCelsiusToFahrenheit(tuesdayTemperature)
console.log(`The Americans would think of that as ${fahrenheit}°F`)

/*

Challenges:
1. Add Fahrenheit to Celsius converter (`function convertFahrenheitToCelsius`) with examples of usage
2. Add `formatCelsius` function that rounds to whole number using `Math.round`, and adds '°C' on end
3. Add `hottestTemperature` function, which takes an array of temperatures, and returns the highest one

*/

// Convert Fahrenheit to Celsius: (°F − 32) x 5/9 = °C
const convertFahrenheitToCelsius = fahrenheit => {
  return (fahrenheit - 32) * 5/9;
}

// Format celsius to whole number then add °C on the end
const formatCelsius = celsius => {
  return `${Math.round(celsius)}°C`
}

// Take an array of temperatures and return the highest one
const hottestTemperature = temperatures => {
  return temperatures.sort( (a,b) => {return b-a} )[0]
}

const celsius = convertFahrenheitToCelsius(fahrenheit)
console.log(`The decimal value ${fahrenheit} in celsius is`, celsius)
console.log(`The value of ${fahrenheit} in celsius is`, formatCelsius(celsius))

const arrayOfTemperatures = [10,20,30,45,52,21,32,11]
console.log('The hottest temperature is', hottestTemperature(arrayOfTemperatures))