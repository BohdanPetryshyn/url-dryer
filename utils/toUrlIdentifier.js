const _ = require('lodash');

const ALLOWED_CHARACTERS = [
  // 0 - 9
  _.range(48, 58),

  // A - Z
  _.range(65, 91),

  // a - z,
  _.range(97, 123),
];

module.exports = number => {
  let rest = number;
  const resultCharacters = [];

  do {
    const allowedCharacterCode = rest % ALLOWED_CHARACTERS.length;
    resultCharacters.unshift(ALLOWED_CHARACTERS[allowedCharacterCode]);

    rest = Math.trunc(rest / ALLOWED_CHARACTERS.length);
  } while (rest > 0);

  return String.fromCharCode(...resultCharacters);
};
