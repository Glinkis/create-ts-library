import { randomInt } from "./randomInt";

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

  while (length) {
    result += dictionary[randomInt(0, dictionary.length - 1)];
    length--;
  }

  return result;
}
