/** @module math */ /** */
import { randomInt } from "./randomInt";

/** @private */
const defaultDictionary =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

/**
 * Returns a random string of the specified length.
 *
 * @param length - Length.
 * @param dictionary - A string containing all the symbols to choose from.
 */
export function randomString(
  length: number,
  dictionary: string = defaultDictionary
) {
  let result = "";

  while (result.length !== length) {
    result += dictionary[randomInt(0, dictionary.length - 1)];
  }

  return result;
}
