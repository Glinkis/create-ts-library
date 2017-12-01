/**
 * Return an array with the separator interspersed between
 * each element of the input array.
 *
 * @param array - Array to intersperse.
 * @param separator - Value to insert.
 *
 * @example
 * intersperse(["a", "b", "c"], "x"); // => ["a", "x", "b", "x", "c"]
 */
export function intersperse(array, separator) {
    if (array.length === 0) {
        return [];
    }
    return array
        .slice(1)
        .reduce(function (acc, val) { return acc.concat([separator, val]); }, [array[0]]);
}
//# sourceMappingURL=intersperse.js.map