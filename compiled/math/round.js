import { decimalPlaces } from "./decimalPlaces";
/**
 * Rounds number to a specific radix.
 *
 * @param value - Value to round.
 * @param radix - Radix.
 */
export function round(value, radix) {
    if (radix === void 0) { radix = 1; }
    value = Math.round(value / radix) * radix;
    return Number(value.toFixed(decimalPlaces(radix)));
}
//# sourceMappingURL=round.js.map