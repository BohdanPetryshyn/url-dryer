const { range } = require('lodash');

const ALLOWED_CHARACTERS = [
  // a - z,
  ...range(97, 123),

  // A - Z
  ...range(65, 91),

  // 0 - 9
  ...range(48, 58),
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
