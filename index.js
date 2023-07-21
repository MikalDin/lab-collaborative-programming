const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(strings) {
strings.sort((a, b) => a.length - b.length);
  return strings;
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
  let result = [];
  for (let i = 0; i < word.length; i++) {
    let shifted = word.slice(i) + word.slice(0, i);
    result.push(shifted);
  }
  return result;
}
  

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(arr) {
  let numbers = arr.filter(num => typeof(num)
  === "number");
  if(numbers.length === 0) {
    return arr;
  }else{
    let max = Math.max(...numbers);
    let min = Math.min(...numbers);
   return max - min;
  }
} 


/**
 * Returns the difference between the largest and smallest number in the array
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {Number} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */
function morseCodeTranslator(message, morseCodeDictionary) {
  const translatedMessage = " ";
 for (const character of message) {
  if (morseCodeDictionary.hasOwnProperty(character))  {
    translatedMessage += morseCodeDictionary[character];
  } else {
    translatedMessage += character;
    }
 }
  return translatedMessage;

  }


module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
