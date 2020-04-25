// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const map = {};
  for (let char of str) {
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char]++;
    }
  }

  let max = 0;
  let candidate = '';
  for(let char in map) {
    if (map[char] > max) {
      max = map[char];
      candidate = char;
    }
  }
  return candidate;
}

module.exports = maxChar;
