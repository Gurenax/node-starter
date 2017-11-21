function formatVanityPlate(string) {
  let words = string.split(' ')
  words = words.map(word => word.toUpperCase())
  return words.join('')
}

const one = 'I like money'
console.log(`Number plate: ${ formatVanityPlate(one) }`)

const two = 'Cats for life'
console.log(`Number plate: ${ formatVanityPlate(two) }`)


/*

Challenges:
1. Replace 'for' with '4'
2. Replace 'to' with '2'
3. Restrict to maximum of 12 characters

*/

const sentence = 'JavaScript (/ˈdʒɑːvəˌskrɪpt/[6]), often abbreviated as JS, is a high-level, dynamic, weakly typed, prototype-based, multi-paradigm, and interpreted programming language. Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production. It is used to make webpages interactive and provide online programs, including video games. The majority of websites employ it, and all modern web browsers support it without the need for plug-ins by means of a built-in JavaScript engine. Each of the many JavaScript engines represent a different implementation of JavaScript, all based on the ECMAScript specification, with some engines not supporting the spec fully, and with many engines supporting additional features beyond ECMA.';
const three = 'To infinity and beyond'

// Replace a string with a wordBefore to a wordAfter
const replaceString = (str, wordBefore, wordAfter ) => {
  return str.replace(new RegExp(wordBefore, 'gi'), wordAfter)
}

// Restrict a string to n characters
const firstNCharacters = (str, n) => {
  return str.substring(0, n)
}

console.log( replaceString(two, 'for', '4') )
console.log( replaceString(formatVanityPlate(two), 'for', '4') )
console.log( '----- ')
console.log( replaceString(three, 'to', '2') )
console.log( replaceString(formatVanityPlate(three), 'to', '2') )
console.log( '----- ')
console.log( replaceString(sentence, 'for', '4') )
console.log( '----- ')
console.log( replaceString(sentence, 'to', '2') )
console.log( '----- ')
console.log( replaceString(replaceString(sentence, 'for', '4'), 'to', '2') )
console.log( '----- ')
console.log( firstNCharacters(sentence, 12) )