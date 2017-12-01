import { linear } from "../animation/easing";
/**
 * Changes a value over time, running a callback with the current value at every frame.
 *
 * @param startValue - Start value.
 * @param endValue - End value.
 * @param duration - Time of the transition. (ms)
 * @param callback - Executes every step of the transition.
 * @param easing - Easing method.
 */
export function transition(startValue, endValue, duration, callback, easing) {
    if (easing === void 0) { easing = linear; }
    var animationFrame;
    var startTime;
    var value = startValue;
    function done() {
        window.cancelAnimationFrame(animationFrame);
        value = endValue;
    }
    function increment(progress) {
        var diff = endValue - startValue;
        value = easing(progress / duration * diff + startValue);
        if (value >= endValue) {
            done();
        }
    }
    function decrement(progress) {
        var diff = startValue - endValue;
        value = easing(progress / duration * -diff + startValue);
        if (value <= endValue) {
            done();
        }
    }
    function step(timestamp) {
        animationFrame = window.requestAnimationFrame(step);
        if (!startTime) {
            startTime = timestamp;
        }
        var progress = timestamp - startTime;
        (startValue < endValue ? increment : decrement)(progress);
        if (typeof callback === "function") {
            callback(value);
        }
    }
    if (startValue !== endValue) {
        animationFrame = window.requestAnimationFrame(step);
    }
    else {
        callback(value);
    }
}
//# sourceMappingURL=transition.js.map