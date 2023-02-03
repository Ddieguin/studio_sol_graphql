/**
 * O(n)
 * @param {string} str
 * @returns {boolean}
 */
function verify_char_repeated(str) {
  let char_previous = '';

  for (const char_current of str) {
    if (char_current === char_previous) {
      return false;
    }
    char_previous = char_current;
  }

  return true;
}

/**
 * O(n)
 * @param {string} str
 * @param {integer} min_size
 * @returns {boolean}
 */
function verify_min_size(str, min_size) {
  return str.length >= min_size ? true : false;
}

function verify_min_upper_case(str, min_upper_case) {
  let number_of_char_upper = 0;

  for (const char of str) {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90)
      number_of_char_upper++;
  }

  return number_of_char_upper < min_upper_case ? false : true;
}

/**
 * O(n)
 * @param {string} str
 * @param {integer} min_lower_case
 * @returns {boolean}
 */
function verify_min_lower_case(str, min_lower_case) {
  let number_of_char_lower = 0;

  for (const char of str) {
    if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
      number_of_char_lower++;
  }

  return number_of_char_lower < min_lower_case ? false : true;
}

/**
 * O(n)
 * @param {string} str
 * @param {integer} number_of_min_digit
 * @returns {boolean}
 */
function verify_min_digit(str, number_of_min_digit) {
  let number_of_digits = 0;

  for (const char of str) {
    if (Number.isInteger(Number(char))) number_of_digits++;
  }

  return number_of_digits < number_of_min_digit ? false : true;
}

/**
 * O(n^2)
 * @param {string} str
 * @param {integer} min_special_chars
 * @returns {boolean}
 */
function verify_min_special_chars(str, min_special_chars) {
  let number_of_special_chars = 0;

  const special_chars = [
    '!',
    '@',
    '#',
    '$',
    '^',
    '&',
    '*',
    '(',
    ')',
    '-',
    '+',
    '\\',
    '/',
    '{',
    '}',
    '[',
    ']',
  ];

  for (const char of str) {
    if (special_chars.includes(char)) number_of_special_chars++;
  }
  return number_of_special_chars < min_special_chars ? false : true;
}

/**
 * HashMap<string, (...args) => boolean>
 */
export const validationFunctions = {
  minSize: verify_min_size,
  minSpecialChars: verify_min_special_chars,
  noRepeated: verify_char_repeated,
  minDigit: verify_min_digit,
  minLowercase: verify_min_lower_case,
  minUppercase: verify_min_upper_case,
};
