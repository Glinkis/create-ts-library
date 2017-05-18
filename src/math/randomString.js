import { randomInt } from "./randomInt";

const defaultDictionary =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

/**
 * Returns a random string of the specified length.
 *
 * @memberof math
 *
 * @param {number?} length
 * @param {string?} dictionary
 * @returns {string}
 */
export function randomString(length, dictionary) {
  if (!length || length < 1) {
    length = 8;
  }

  if (!dictionary || dictionary.length < 1) {
    dictionary = defaultDictionary;
  }

  let result = "";

  while (length--) {
    result += dictionary[randomInt(0, dictionary.length - 1)];
  }

  return result;
}
