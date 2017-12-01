import { randomInt } from "./randomInt";
var defaultDictionary = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
/**
 * Returns a random string of the specified length.
 *
 * @param length - Length.
 * @param dictionary - A string containing all the symbols to choose from.
 */
export function randomString(length, dictionary) {
    if (dictionary === void 0) { dictionary = defaultDictionary; }
    var result = "";
    while (length) {
        result += dictionary[randomInt(0, dictionary.length - 1)];
        length--;
    }
    return result;
}
//# sourceMappingURL=randomString.js.map