/**
 * No easing, no acceleration.
 *
 * @memberof animation.easing
 *
 * @param {number} t - [0-1]
 *
 * @returns {number}
 */
function linear(t) {
    return t;
}

/**
 * Slight acceleration from zero to full speed.
 *
 * @memberof animation.easing
 *
 * @param {number} t - [0-1]
 *
 * @returns {number}
 */
function easeInSine(t) {
    return -1 * Math.cos(t * (Math.PI / 2)) + 1;
}

/**
 * Slight deceleration at the end.
 *
 * @memberof animation.easing
 *
 * @param {number} t - [0-1]
 *
 * @returns {number}
 */
function easeOutSine(t) {
    return Math.sin(t * (Math.PI / 2));
}

/**
 * Slight acceleration at beginning and slight deceleration at end.
 *
 * @memberof animation.easing
 *
 * @param {number} t - [0-1]
 *
 * @returns {number}
 */
function easeInOutSine(t) {
    return -0.5 * (Math.cos(Math.PI * t) - 1);
}

/**
 * Accelerates from zero velocity.
 *
 * @memberof animation.easing
 *
 * @param {number} t - [0-1]
 *
 * @returns {number}
 */
function easeInQuad(t) {
    return t * t;
}

/**
 * Decelerates to zero velocity.
 *
 * @memberof animation.easing
 *
 * @param {number} t - [0-1]
 *
 * @returns {number}
 */
function easeOutQuad(t) {
    return t * (2 - t);
}

/**
 * Accelerates until halfway, then decelerates.
 *
 * @memberof animation.easing
 *
 * @param {number} t - [0-1]
 *
 * @returns {number}
 */
function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

/**
 * Accelerates from zero velocity.
 *
 * @memberof animation.easing
 *
 * @param {number} t - [0-1]
 *
 * @returns {number}
 */
function easeInCubic(t) {
    return t * t * t;
}

/**
 * Decelerates to zero velocity.
 *
 * @memberof animation.easing
 *
 * @param {number} t - [0-1]
 *
 * @returns {number}
 */
function easeOutCubic(t) {
    var t1 = t - 1;
    return t1 * t1 * t1 + 1;
}

/**
 * Accelerates until halfway, then decelerates.
 *
 * @memberof animation.easing
 *
 * @param {number} t - [0-1]
 *
 * @returns {number}
 */
function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

/**
 * Accelerates from zero velocity.
 *
 * @memberof animation.easing
 *
 * @param {number} t - [0-1]
 *
 * @returns {number}
 */
function easeInQuart(t) {
    return t * t * t * t;
}

/**
 * Decelerates to zero velocity.
 *
 * @memberof animation.easing
 *
 * @param {number} t - [0-1]
 *
 * @returns {number}
 */
function easeOutQuart(t) {
    var t1 = t - 1;
    return 1 - t1 * t1 * t1 * t1;
}

/**
 * Accelerates until halfway, then decelerates.
 *
 * @memberof animation.easing
 *
 * @param {number} t - [0-1]
 *
 * @returns {number}
 */
function easeInOutQuart(t) {
    var t1 = t - 1;
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * t1 * t1 * t1 * t1;
}

/**
 * Accelerates from zero velocity..
 *
 * @memberof animation.easing
 *
 * @param {number} t - [0-1]
 *
 * @returns {number}
 */
function easeInQuint(t) {
    return t * t * t * t * t;
}

/**
 * Decelerates to zero velocity.
 *
 * @memberof animation.easing
 *
 * @param {number} t - [0-1]
 *
 * @returns {number}
 */
function easeOutQuint(t) {
    var t1 = t - 1;
    return 1 + t1 * t1 * t1 * t1 * t1;
}

/**
 * Accelerates until halfway, then decelerates.
 *
 * @memberof animation.easing
 *
 * @param {number} t - [0-1]
 *
 * @returns {number}
 */
function easeInOutQuint(t) {
    var t1 = t - 1;
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * t1 * t1 * t1 * t1 * t1;
}

/**
 * Accelerates exponentially until finish.
 *
 * @memberof animation.easing
 *
 * @param {number} t - [0-1]
 *
 * @returns {number}
 */
function easeInExpo(t) {
    return t === 0 ? 0 : Math.pow(2, (10 * (t - 1)));
}

/**
 * Initial exponential acceleration slowing to stop.
 *
 * @memberof animation.easing
 *
 * @param {number} t - [0-1]
 *
 * @returns {number}
 */
function easeOutExpo(t) {
    return t === 1 ? 1 : -(Math.pow(2, (-10 * t))) + 1;
}

/**
 * Exponential acceleration and deceleration.
 *
 * @memberof animation.easing
 *
 * @param {number} t - [0-1]
 *
 * @returns {number}
 */
function easeInOutExpo(t) {
    if (t === 0 || t === 1) {
        return t;
    }
    var a = t * 2;
    var b = a - 1;
    if (a < 1) {
        return 0.5 * Math.pow(2, (10 * b));
    }
    return 0.5 * (-(Math.pow(2, (-10 * b))) + 2);
}

/**
 * Increases velocity until stop.
 *
 * @memberof animation.easing
 *
 * @param {number} t - [0-1]
 *
 * @returns {number}
 */
function easeInCirc(t) {
    return -1 * (Math.sqrt(1 - t * t) - 1);
}

/**
 * Start fast, then decreases velocity until stop.
 *
 * @memberof animation.easing
 *
 * @param {number} t - [0-1]
 *
 * @returns {number}
 */
function easeOutCirc(t) {
    var t1 = t - 1;
    return Math.sqrt(1 - t1 * t1);
}

/**
 * Fast increase in velocity, fast decrease in velocity.
 *
 * @memberof animation.easing
 *
 * @param {number} t - [0-1]
 *
 * @returns {number}
 */
function easeInOutCirc(t) {
    var a = t * 2;
    var b = a - 2;
    if (a < 1) {
        return -0.5 * (Math.sqrt(1 - a * a) - 1);
    }
    return 0.5 * (Math.sqrt(1 - b * b) + 1);
}

/**
 * @module
 * @memberof animation
 */



var easing = Object.freeze({
	linear: linear,
	easeInSine: easeInSine,
	easeOutSine: easeOutSine,
	easeInOutSine: easeInOutSine,
	easeInQuad: easeInQuad,
	easeOutQuad: easeOutQuad,
	easeInOutQuad: easeInOutQuad,
	easeInCubic: easeInCubic,
	easeOutCubic: easeOutCubic,
	easeInOutCubic: easeInOutCubic,
	easeInQuart: easeInQuart,
	easeOutQuart: easeOutQuart,
	easeInOutQuart: easeInOutQuart,
	easeInQuint: easeInQuint,
	easeOutQuint: easeOutQuint,
	easeInOutQuint: easeInOutQuint,
	easeInExpo: easeInExpo,
	easeOutExpo: easeOutExpo,
	easeInOutExpo: easeInOutExpo,
	easeInCirc: easeInCirc,
	easeOutCirc: easeOutCirc,
	easeInOutCirc: easeInOutCirc
});

/**
 * Changes a value over time, running a callback with the current value at every frame.
 *
 * @memberof animation
 *
 * @param {number} startValue - Start value.
 * @param {number} endValue - End value.
 * @param {number} duration - Time of the transition. (ms)
 * @param {function(value: number): void} callback - Executes every step of the transition.
 * @param {function(t: number): number} easing - Easing method.
 */
function transition(startValue, endValue, duration, callback, easing) {
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



var animation = Object.freeze({
	easing: easing,
	transition: transition
});

/**
 * Returns the closest number out of an array.
 *
 * @memberof array
 *
 * @param {Array} array - The array to search in.
 * @param {number} number - The number to search for the closest to.
 *
 * @returns {number}
 *
 * @example
 * // Returns 10
 * getClosestNumber([0, 10, 20], 12);
 */
function getClosestNumber(array, number) {
    return array.reduce(function (previous, current) {
        return Math.abs(current - number) < Math.abs(previous - number)
            ? current
            : previous;
    });
}

/**
 * Return an array with the separator interspersed between
 * each element of the input array.
 *
 * @memberof array
 *
 * @param {Array<*>} array - Array to intersperse.
 * @param {*} separator - Value to insert.
 *
 * @returns {Array}
 *
 * @example
 * intersperse(["a", "b", "c"], "x"); // => ["a", "x", "b", "x", "c"]
 */
function intersperse(array, separator) {
    if (array.length === 0) {
        return [];
    }
    return array
        .slice(1)
        .reduce(function (acc, val) { return acc.concat([separator, val]); }, [array[0]]);
}

/**
 * Converts a NodeList to an Array.
 *
 * @memberof array
 *
 * @param {NodeList} nodeList - A NodeList.
 *
 * @returns {Array}
 *
 * @example
 * // => [div, div, …]
 * toArray(document.querySelectorAll('div'));
 */
function nodeListToArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
}

/**
 * Array utilities module.
 * @module
 */



var array = Object.freeze({
	getClosestNumber: getClosestNumber,
	intersperse: intersperse,
	nodeListToArray: nodeListToArray
});

/**
 * Converts a hex string to a color.
 * If it can't be converted null is returned.
 *
 * @memberof color
 *
 * @param {string} hex - A hexadecimal color string. (i.e. #CCCCCCFF or CCCCCC)
 *
 * @returns {object}
 */
function hexToRgba(hex) {
    hex = hex.replace("#", "");
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);
    if (hex.length === 6) {
        return { r: r, g: g, b: b };
    }
    else if (hex.length === 8) {
        return {
            r: r,
            g: g,
            b: b,
            a: parseInt(hex.substring(6, 8), 16)
        };
    }
    return null;
}

function hue2rgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * 6 * t;
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
}
/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @memberof color
 *
 * @param {number} h - The hue.
 * @param {number} s - The saturation.
 * @param {number} l - The lightness.
 *
 * @returns {{ r: number, g: number, b: number }} - The RGB representation.
 */
function hslToRgb(h, s, l) {
    var r;
    var g;
    var b;
    if (s === 0) {
        r = l; // achromatic
        g = l; // achromatic
        b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return {
        r: r * 255,
        g: g * 255,
        b: b * 255
    };
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}
/**
 * Converts RGB(A) values to a hex string.
 *
 * @memberof color
 *
 * @param {number} r - Red.
 * @param {number} g - Green.
 * @param {number} b - Blue.
 * @param {number?} a - Alpha.
 *
 * @returns {string}
 */
function rgbaToHex(r, g, b, a) {
    var hex = "#" + (componentToHex(r) + componentToHex(g) + componentToHex(b));
    return a !== undefined ? hex + componentToHex(a) : hex;
}

function hue(max, r, g, b, d) {
    var h = 0;
    if (r === max) {
        h = (g - b) / d + (g < b ? 6 : 0);
    }
    else if (r === max) {
        h = (b - r) / d + 2;
    }
    else if (b === max) {
        h = (r - g) / d + 4;
    }
    return h / 6;
}
/**
 * Converts an RGB color value to HSL.
 * Conversion formula adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 *
 * Assumes r, g, and b are contained in the set [0, 255] and returns h, s, and l in the set [0, 1].
 *
 * @memberof color
 *
 * @param {number} red - The red color value.
 * @param {number} green - The green color value.
 * @param {number} blue - The blue color value.
 *
 * @returns {{ h: number, s: number, l: number }} - The HSL representation.
 */
function rgbToHsl(red, green, blue) {
    var r = red / 255;
    var g = green / 255;
    var b = blue / 255;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var l = (max + min) / 2;
    if (max === min) {
        return { h: 0, s: 0, l: l };
    }
    var d = max - min;
    var s = l > 0.5 ? d / (2 - d) : d / (max + min);
    var h = hue(max, r, g, b, d);
    return { h: h, s: s, l: l };
}

/**
 * Color utilities module.
 * @module
 */



var color = Object.freeze({
	hexToRgba: hexToRgba,
	hslToRgb: hslToRgb,
	rgbaToHex: rgbaToHex,
	rgbToHsl: rgbToHsl
});

/**
 * Goes through an elements hierarchy to find its position relative to its container.
 *
 * @memberof dom
 *
 * @param {HTMLElement} element - Element to get the position of.
 * @param {HTMLElement} container - The container to get the position relative to.
 *
 * @returns {{left: number, top: number}}
 */
function getElementPositionInContainer(element, container) {
    var top = 0;
    var left = 0;
    do {
        top += element.offsetTop || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
    } while (element && element !== container);
    return { left: left, top: top };
}

/**
 * Goes through an elements hierarchy to find its absolute position on the page.
 *
 * @memberof dom
 *
 * @param {HTMLElement} element - Element to get the position of.
 *
 * @returns {{left: number, top: number}}
 */
function getElementAbsolutePosition(element) {
    return getElementPositionInContainer(element, document.body);
}

/**
 * DOM utilities module.
 * @module
 */



var dom = Object.freeze({
	getElementAbsolutePosition: getElementAbsolutePosition,
	getElementPositionInContainer: getElementPositionInContainer
});

/**
 * Class representing the data for an interaction event.
 * @private
 */
var InteractionData = /** @class */ (function () {
    function InteractionData(element) {
        this.startX = 0;
        this.startY = 0;
        this.currentX = 0;
        this.currentY = 0;
        this.previousX = 0;
        this.previousY = 0;
        this.relativeX = 0;
        this.relativeY = 0;
        this.transitionX = 0;
        this.transitionY = 0;
        this.compoundX = 0;
        this.compoundY = 0;
        this.previousCompoundX = 0;
        this.previousCompoundY = 0;
        this.endX = 0;
        this.endY = 0;
        this.velocityX = 0;
        this.velocityY = 0;
        this.element = element;
    }
    InteractionData.prototype.start = function (x, y) {
        this.startX = x;
        this.startY = y;
        this.previousCompoundX = this.compoundX;
        this.previousCompoundY = this.compoundY;
        this.previousX = this.startX;
        this.previousY = this.startY;
    };
    InteractionData.prototype.update = function (x, y) {
        this.currentX = x;
        this.currentY = y;
        this.setRelative();
        this.setTransition();
        this.setCompound();
        this.setVelocity();
        this.previousX = this.currentX;
        this.previousY = this.currentY;
    };
    InteractionData.prototype.end = function (x, y) {
        this.endX = x;
        this.endY = y;
    };
    InteractionData.prototype.setRelative = function () {
        this.relativeX = this.currentX - this.startX;
        this.relativeY = this.currentY - this.startY;
    };
    InteractionData.prototype.setTransition = function () {
        this.transitionX = this.relativeX / this.element.offsetWidth;
        this.transitionY = this.relativeY / this.element.offsetHeight;
    };
    InteractionData.prototype.setCompound = function () {
        this.compoundX = this.relativeX + this.previousCompoundX;
        this.compoundY = this.relativeY + this.previousCompoundY;
    };
    InteractionData.prototype.setVelocity = function () {
        this.velocityX = this.currentX - this.previousX;
        this.velocityY = this.currentY - this.previousY;
    };
    return InteractionData;
}());

/**
 * Sets up the required events and listeners for a complete drag interaction.
 *
 * @memberof interactivity
 *
 * @param {HTMLElement} element - The element to attach the events to,
 * @param {object} callbacks - Callbacks that are called when a dragging action occurs.
 * @param {function(event: Event, data: InteractionData)} callbacks.onStart - Called when dragging starts.
 * @param {function(event: Event, data: InteractionData)} callbacks.onMove - Called when dragging occurs.
 * @param {function(event: Event, data: InteractionData)} callbacks.onEnd - Called when dragging stops.
 */
function addDragInteraction(element, callbacks) {
    var data = new InteractionData(element);
    function start(event, x, y) {
        data.start(x, y);
        if (typeof callbacks.onStart === "function") {
            callbacks.onStart(event, data);
        }
    }
    function update(event, x, y) {
        data.update(x, y);
        if (typeof callbacks.onMove === "function") {
            callbacks.onMove(event, data);
        }
    }
    function end(event, x, y) {
        data.end(x, y);
        if (typeof callbacks.onEnd === "function") {
            callbacks.onEnd(event, data);
        }
    }
    var onMouseMove = function (e) { return update(e, e.pageX, e.pageY); };
    var onMouseUp = function (e) {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        end(e, e.pageX, e.pageY);
    };
    var onMouseDown = function (e) {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
        start(e, e.pageX, e.pageY);
    };
    var onTouchMove = function (e) { return update(e, e.touches[0].pageX, e.touches[0].pageY); };
    var onTouchEnd = function (e) {
        document.removeEventListener("touchmove", onTouchMove);
        document.removeEventListener("touchend", onTouchEnd);
        end(e, e.touches[0].pageX, e.touches[0].pageY);
    };
    var onTouchStart = function (e) {
        document.addEventListener("touchmove", onTouchMove);
        document.addEventListener("touchend", onTouchEnd);
        start(e, e.touches[0].pageX, e.touches[0].pageY);
    };
    element.addEventListener("mousedown", onMouseDown);
    element.addEventListener("touchstart", onTouchStart);
}

/**
 * Interactivity utilities module.
 * @module
 */



var interactivity = Object.freeze({
	addDragInteraction: addDragInteraction
});

/**
 * @memberof math
 *
 * @param {number?} max
 * @param {number} value
 *
 * @returns {number}
 */
function clampMax(max, value) {
    if (max != null && value >= max) {
        return max;
    }
    return value;
}

/**
 * @memberof math
 *
 * @param {number?} min
 * @param {number} value
 *
 * @returns {number}
 */
function clampMin(min, value) {
    if (min != null && value <= min) {
        return min;
    }
    return value;
}

/**
 * Returns a value clamped between a maximum and a minimum number.
 *
 * @memberof math
 *
 * @param {number} value - The value to clamp.
 * @param {number} min - The minimum boundary.
 * @param {number} max - The maximum boundary.
 *
 * @returns {number}
 *
 * @example
 * clamp(5, 0, 10); // Returns 5
 * @example
 * clamp(-10, 0, 10); // Returns 0
 * @example
 * clamp(20, 0, 10); // Returns 10
 */
function clamp(value, min, max) {
    value = clampMax(max, value);
    value = clampMin(min, value);
    return value;
}

/**
 * Computes the amount of decimals of a number.
 * Note: Will drop trailing zeroes off a numeric value.
 * 1.00 => 0 decimals
 * '1.00' => 2 decimals.
 *
 * @memberof math
 *
 * @param {number | string} value - A value as a number or a string.
 *
 * @returns {number}
 */
function decimalPlaces(value) {
    var match = ("" + value).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    if (!match) {
        return 0;
    }
    return Math.max(0, 
    // Number of digits right of decimal point.
    (match[1] ? match[1].length : 0) -
        // Adjust for scientific notation.
        (match[2] ? +match[2] : 0));
}

/**
 * Converts degrees to radians.
 *
 * @memberof math
 *
 * @param {number} degree - A number representing the degrees to convert.
 *
 * @returns {number}
 */
function degreeToRadian(degree) {
    return degree * (Math.PI / 180);
}

/**
 * Checks if value is inside a range.
 *
 * @memberof math
 *
 * @param {number} value - Value to check.
 * @param {number} min - Range minimum boundary.
 * @param {number} max - Range maximum boundary.
 * @param {number?} threshold - Optional threshold value.
 *
 * @returns {boolean}
 */
function inRange(value, min, max, threshold) {
    if (threshold === void 0) { threshold = 0; }
    return value + threshold >= min && value - threshold <= max;
}

/**
 * Linear interpolation.
 *
 * @memberof math
 *
 * @param {number} start - Start value;
 * @param {number} end - End value.
 * @param {number} t -  A value in the set [0, 1].
 *
 * @returns {number}
 */
function lerp(start, end, t) {
    return start + (end - start) * t;
}

/**
 * Maps a value from an input range to an output range.
 *
 * @memberof math
 *
 * @param {number} value - The value to map.
 * @param {number} inStart - In start value.
 * @param {number} inEnd - In end value.
 * @param {number} outStart - Out start value.
 * @param {number} outEnd - Out end value.
 *
 * @returns {number}
 */
function mapToRange(value, inStart, inEnd, outStart, outEnd) {
    value = (value - inStart) / (inEnd - inStart) || 0;
    if (value === Infinity) {
        return 0;
    }
    return outStart + (outEnd - outStart) * value;
}

/**
 * Converts radians to degrees.
 *
 * @memberof math
 *
 * @param {number} radian - A number representing the radians to
 *
 * @returns {number}
 */
function radianToDegree(radian) {
    return radian * 180 / Math.PI;
}

/**
 * Returns a pseudo-random number between a min (inclusive) and a max (exclusive) value.
 *
 * If min is greater than max the parameters are swapped to support inverted ranges.
 *
 * @memberof math
 *
 * @param {number?} min - The minimum value of the range.
 * @param {number?} max - The maximum value of the range.
 *
 * @returns {number}
 */
function randomRange(min, max) {
    min = min == null ? Number.MIN_VALUE : min;
    max = max == null ? Number.MAX_VALUE : max;
    return (Math.min(min, max) +
        Math.random() * (Math.max(min, max) - Math.min(min, max)));
}

/**
 * Gets random integer inside range or snap to min/max values.
 *
 * @memberof math
 *
 * @param {number} min - Minimum value.
 * @param {number} max - Maximum value.
 *
 * @returns {number}
 */
function randomInt(min, max) {
    // can't be max + 0.5 otherwise it will round up if `rand`
    // returns `max` causing it to overflow range.
    // -0.5 and + 0.49 are required to avoid bias caused by rounding
    return Math.round(randomRange(min - 0.5, max + 0.499999999999));
}

var defaultDictionary = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
/**
 * Returns a random string of the specified length.
 *
 * @memberof math
 *
 * @param {number} length - Length.
 * @param {string?} dictionary - A string containing all the symbols to choose from.
 *
 * @returns {string}
 */
function randomString(length, dictionary) {
    if (dictionary === void 0) { dictionary = defaultDictionary; }
    var result = "";
    while (length) {
        result += dictionary[randomInt(0, dictionary.length - 1)];
        length--;
    }
    return result;
}

/**
 * Rounds number to a specific radix.
 *
 * @memberof math
 *
 * @param {number} value - Value to round.
 * @param {number} radix - Radix.
 *
 * @returns {number}
 */
function round(value, radix) {
    if (radix === void 0) { radix = 1; }
    value = Math.round(value / radix) * radix;
    return Number(value.toFixed(decimalPlaces(radix)));
}

/**
 * Wraps a value within a range.
 *
 * @memberof math
 *
 * @param {number} value - The value to wrap.
 * @param {number} min - The minimum boundary.
 * @param {number} max - The maximum boundary.
 *
 * @returns {number}
 */
function wrap(value, min, max) {
    var range = max - min;
    if (min === max) {
        return min;
    }
    else if (value > max) {
        value = min + (value - min);
    }
    else {
        value = max - (min - value);
    }
    return value % range;
}

/**
 * Math utilities module.
 * @module
 */



var math = Object.freeze({
	clamp: clamp,
	decimalPlaces: decimalPlaces,
	degreeToRadian: degreeToRadian,
	inRange: inRange,
	lerp: lerp,
	mapToRange: mapToRange,
	radianToDegree: radianToDegree,
	randomInt: randomInt,
	randomRange: randomRange,
	randomString: randomString,
	round: round,
	wrap: wrap
});

var screen = window.screen;
/**
 * Returns the pixel ratio of the current device, as a value from 0 to 1.
 *
 * @memberof misc
 *
 * @returns {number}
 */
function getDevicePixelRatio() {
    var ratio = 1;
    // To account for zoom, change to use deviceXDPI instead of systemXDPI
    if (screen.systemXDPI &&
        screen.logicalXDPI &&
        screen.systemXDPI > screen.logicalXDPI) {
        // Only allow for values > 1
        ratio = screen.systemXDPI / screen.logicalXDPI;
    }
    else if (window.devicePixelRatio) {
        ratio = window.devicePixelRatio;
    }
    return ratio;
}

var navigator = window.navigator;
/**
 * @memberof misc
 */
var isMobile = {
    /**
     * @private
     * @returns {boolean}
     */
    isAndroid: function () {
        return !!navigator.userAgent.match(/Android/i);
    },
    /**
     * @private
     * @returns {boolean}
     */
    isBlackBerry: function () {
        return !!navigator.userAgent.match(/BlackBerry/i);
    },
    /**
     * @private
     * @returns {boolean}
     */
    isiOS: function () {
        return !!navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    /**
     * @private
     * @returns {boolean}
     */
    isOpera: function () {
        return !!navigator.userAgent.match(/Opera Mini/i);
    },
    /**
     * @private
     * @returns {boolean}
     */
    isWindows: function () {
        return (!!navigator.userAgent.match(/IEMobile/i) ||
            !!navigator.userAgent.match(/WPDesktop/i));
    },
    /**
     * @private
     * @returns {boolean}
     */
    any: function () {
        return (this.isAndroid() ||
            this.isBlackBerry() ||
            this.isiOS() ||
            this.isOpera() ||
            this.isWindows());
    }
};

/**
 * Misc utilities module.
 * @module
 */



var misc = Object.freeze({
	getDevicePixelRatio: getDevicePixelRatio,
	isMobile: isMobile
});

function deCasteljau(points, t) {
    var calculatedPoints = [];
    for (var i = 1; i < points.length; i++) {
        var value = lerp(points[i - 1], points[i], t);
        calculatedPoints.push(value);
    }
    return calculatedPoints;
}
/**
 * Calculates a point on the curve, for a given t value between 0 and 1.
 *
 * @memberof splines
 *
 * @param {number[]} points - Array of control points for the curve.
 * @param {number} t - A value between 0 and 1. 0 is the beginning of the curve, 1 is the end.
 *
 * @returns {number}
 */
function bezierValue(points, t) {
    if (t === 0 || points.length === 1) {
        return points[0];
    }
    if (t === 1) {
        return points[points.length - 1];
    }
    return bezierValue(deCasteljau(points, t), t);
}
/**
 * Calculates the curve tangent at the specified t value.
 *
 * @memberof splines
 *
 * @param {number[]} points - Array of control points for the curve.
 * @param {number} t - A value between 0 and 1. 0 is the beginning of the curve, 1 is the end.
 *
 * @returns {number[]}
 */
function bezierDerivative(points, t) {
    if (points.length === 1) {
        return [points[0], points[0]];
    }
    if (points.length === 2) {
        return [points[0], points[1]];
    }
    var deCa = deCasteljau(points, t);
    if (deCa.length === 2) {
        return deCa;
    }
    return bezierDerivative(deCa, t);
}

function catmullRom(p1, p2, p3, p4, t) {
    var squared = t * t;
    var cubed = t * t * t;
    var f1 = -0.5 * cubed + squared - 0.5 * t;
    var f2 = 1.5 * cubed - 2.5 * squared + 1.0;
    var f3 = -1.5 * cubed + 2.0 * squared + 0.5 * t;
    var f4 = 0.5 * cubed - 0.5 * squared;
    return p1 * f1 + p2 * f2 + p3 * f3 + p4 * f4;
}
// function catmullRomDerivative(p1, p2, p3, p4, t) {
//   const squared = t * t;
//   return p2 + 2 * p3 * t + 3 * p4 * squared;
// }
/**
 * Calculates a point on the curve, for a given t value between 0 and 1.
 *
 * @memberof splines
 *
 * @param {number[]} points - Array of control points for the curve.
 * @param {number} t - A value between 0 and 1. 0 is the beginning of the curve, 1 is the end.
 *
 * @returns {number}
 * TODO: Write tests to confirm it works as intended.
 */
function catmullRomValue(points, t) {
    if (points.length < 4) {
        return 0;
    }
    // TODO: Make it work with any number of points.
    return catmullRom(points[0], points[1], points[2], points[3], t);
}
console.warn("Function 'catmullRomValue' is incomplete. Use at own risk.");

/**
 * Calculates a point on the curve, for a given t value between 0 and 1.
 *
 * @memberof splines
 *
 * @param {number[]} points - Array of control points for the curve.
 * @param {number} t - A value between 0 and 1. 0 is the beginning of the curve, 1 is the end.
 *
 * @returns {number}
 * TODO: Write tests to confirm it works as intended.
 */
function hermite(points, t) {
    var squared = t * t;
    var cubed = t * squared;
    var part1 = 2.0 * cubed - 3.0 * squared + 1.0;
    var part2 = -2.0 * cubed + 3.0 * squared;
    var part3 = cubed - 2.0 * squared + t;
    var part4 = cubed - squared;
    return (points[0] * part1 +
        points[2] * part2 +
        points[1] * part3 +
        points[3] * part4);
}
console.warn("Function 'hermite' is incomplete. Use at own risk.");

/**
 * Spline utilities module.
 * @module
 */



var splines = Object.freeze({
	bezierValue: bezierValue,
	bezierDerivative: bezierDerivative,
	catmullRomValue: catmullRomValue,
	hermite: hermite
});

/**
 * Adds two vectors and returns the result.
 *
 * @memberof vector2
 *
 * @param {{ x: number, y: number }} vector1 - First vector.
 * @param {{ x: number, y: number }} vector2 - Second vector.
 *
 * @returns {{ x: number, y: number }}
 */
function add(vector1, vector2) {
    return {
        x: vector1.x + vector2.x,
        y: vector1.y + vector2.y
    };
}

/**
 * Returns the distance between two vectors.
 *
 * @memberof vector2
 *
 * @param {{ x: number, y: number }} vector1 - Point1 position.
 * @param {{ x: number, y: number }} vector2 - Point2 position.
 *
 * @returns {number}
 */
function distance(vector1, vector2) {
    var x = Math.abs(vector1.x - vector2.x);
    var y = Math.abs(vector1.y - vector2.y);
    var x2 = Math.pow(x, 2);
    var y2 = Math.pow(y, 2);
    return Math.sqrt(x2 + y2);
}

/**
 * Divides two vectors and returns the result.
 *
 * @memberof vector2
 *
 * @param {{ x: number, y: number }} vector1 - First vector.
 * @param {{ x: number, y: number }} vector2 - Second vector.
 *
 * @returns {{ x: number, y: number }}
 */
function divide(vector1, vector2) {
    return {
        x: vector1.x / vector2.x,
        y: vector1.y / vector2.y
    };
}

/**
 * Returns the dot product of two vectors.
 *
 * @memberof vector2
 *
 * @param {{ x: number, y: number }} vector1 - First vector.
 * @param {{ x: number, y: number }} vector2 - Second vector.
 *
 * @returns {number}
 */
function dot(vector1, vector2) {
    return vector1.x * vector2.x + vector1.y * vector2.y;
}

/**
 * Returns length of a vector.
 *
 * @memberof vector2
 *
 * @param {{ x: number, y: number }} vector - Vector.
 *
 * @returns {number}
 */
function length(vector) {
    return Math.sqrt(dot(vector, vector));
}

/**
 * Multiplies two vectors and returns the result.
 *
 * @memberof vector2
 *
 * @param {{ x: number, y: number }} vector1 - First vector.
 * @param {{ x: number, y: number }} vector2 - Second vector.
 *
 * @returns {{ x: number, y: number }}
 */
function multiply(vector1, vector2) {
    return {
        x: vector1.x * vector2.x,
        y: vector1.y * vector2.y
    };
}

/**
 * Returns the negated coordinated of a vector.
 *
 * @memberof vector2
 *
 * @param {{ x: number, y: number }} vector - Vector to negate.
 *
 * @returns {{ x: number, y: number }}
 */
function negate(vector) {
    return {
        x: -vector.x === -0 ? 0 : -vector.x,
        y: -vector.y === -0 ? 0 : -vector.y
    };
}

/**
 * Checks for intersection between two vectors.
 *
 * @memberof vector2
 *
 * @param {{ x: number, y: number }} vector1 - First vector.
 * @param {number} size1 - First size;
 * @param {{ x: number, y: number }} vector2 - Second vector.
 * @param {number} size2 - Second size.
 *
 * @returns {boolean}
 */
function pointIntersection(vector1, size1, vector2, size2) {
    return (Math.pow((vector2.x - vector1.x), 2) + Math.pow((vector1.y - vector2.y), 2) <=
        Math.pow((size1 + size2), 2));
}

var PRECISION = 100000000;
var roundToPrecision = function (value) { return Math.round(value * PRECISION) / PRECISION; };
/**
 * Returns a vector positioned around another vector.
 *
 * @memberof vector2
 *
 * @param {{ x: number, y: number }} vector - Center point position.
 * @param {number} distance - Distance from the center point.
 * @param {number} radian - Radian value.
 *
 * @returns {{ x: number, y: number }}
 */
function positionAroundVector2(vector, distance, radian) {
    var xAxis = roundToPrecision(Math.cos(radian));
    var yAxis = roundToPrecision(Math.sin(radian));
    return {
        x: vector.x + distance * xAxis,
        y: vector.y + distance * yAxis
    };
}

/**
 * Scales a vector by a value.
 *
 * @memberof vector2
 *
 * @param {{ x: number, y: number }} vector - Vector to scale.
 * @param {number} value - Value to scale by.
 *
 * @returns {{ x: number, y: number }}
 */
function scale(vector, value) {
    return {
        x: vector.x * value,
        y: vector.y * value
    };
}

/**
 * Subtracts two vectors and returns the result.
 *
 * @memberof vector2
 *
 * @param {{ x: number, y: number }} vector1 - First vector.
 * @param {{ x: number, y: number }} vector2 - Second vector.
 *
 * @returns {{ x: number, y: number }}
 */
function subtract(vector1, vector2) {
    return {
        x: vector1.x - vector2.x,
        y: vector1.y - vector2.y
    };
}

/**
 * Loops through the dimensions of a vector.
 * Starts at zero, so keep in mind that the number of callbacks will be the dimension sizes +1;
 *
 * @memberof vector2
 *
 * @param {{ x: number, y: number }} vector - Vector to traverse.
 * @param {function({ x: number, y: number })} callback - Callback for each step.
 * @param {number?} step - Step size (default: 1).
 */
function traverse(vector, callback, step) {
    if (step === void 0) { step = 1; }
    for (var x = 0; x <= vector.x; x += step) {
        for (var y = 0; y <= vector.y; y += step) {
            callback({ x: x, y: y });
        }
    }
}

/**
 * Vector2 utilities module.
 * @module
 */



var vector2 = Object.freeze({
	add: add,
	distance: distance,
	divide: divide,
	dot: dot,
	length: length,
	multiply: multiply,
	negate: negate,
	pointIntersection: pointIntersection,
	positionAroundVector2: positionAroundVector2,
	scale: scale,
	subtract: subtract,
	traverse: traverse
});

/**
 * Adds two vectors and returns the result.
 *
 * @memberof vector3
 *
 * @param {{ x: number, y: number, z: number }} vector1 - First vector.
 * @param {{ x: number, y: number, z: number }} vector2 - Second vector.
 *
 * @returns {{ x: number, y: number, z: number }}
 */
function add$1(vector1, vector2) {
    return {
        x: vector1.x + vector2.x,
        y: vector1.y + vector2.y,
        z: vector1.z + vector2.z
    };
}

/**
 * Returns the distance between two vectors.
 *
 * @memberof vector3
 *
 * @param {{ x: number, y: number, z: number }} vector1 - Point1 position.
 * @param {{ x: number, y: number, z: number }} vector2 - Point2 position.
 *
 * @returns {number}
 */
function distance$1(vector1, vector2) {
    var x = Math.abs(vector1.x - vector2.x);
    var y = Math.abs(vector1.y - vector2.y);
    var z = Math.abs(vector1.z - vector2.z);
    var x2 = Math.pow(x, 2);
    var y2 = Math.pow(y, 2);
    var z2 = Math.pow(z, 2);
    return Math.sqrt(x2 + y2 + z2);
}

/**
 * Divides two vectors and returns the result.
 *
 * @memberof vector3
 *
 * @param {{ x: number, y: number, z: number }} vector1 - First vector.
 * @param {{ x: number, y: number, z: number }} vector2 - Second vector.
 *
 * @returns {{ x: number, y: number, z: number }}
 */
function divide$1(vector1, vector2) {
    return {
        x: vector1.x / vector2.x,
        y: vector1.y / vector2.y,
        z: vector1.z / vector2.z
    };
}

/**
 * Returns the dot product of two vectors.
 *
 * @memberof vector3
 *
 * @param {{ x: number, y: number, z: number }} vector1 - First vector.
 * @param {{ x: number, y: number, z: number }} vector2 - Second vector.
 *
 * @returns {number}
 */
function dot$1(vector1, vector2) {
    return vector1.x * vector2.x + vector1.y * vector2.y + vector1.z * vector2.z;
}

/**
 * Returns length of a vector.
 *
 * @memberof vector2
 *
 * @param {{ x: number, y: number, z: number }} vector - Vector.
 *
 * @returns {number}
 */
function length$1(vector) {
    return Math.sqrt(dot$1(vector, vector));
}

/**
 * Multiplies two vectors and returns the result.
 *
 * @memberof vector3
 *
 * @param {{ x: number, y: number, z: number }} vector1 - First vector.
 * @param {{ x: number, y: number, z: number }} vector2 - Second vector.
 *
 * @returns {{ x: number, y: number, z: number }}
 */
function multiply$1(vector1, vector2) {
    return {
        x: vector1.x * vector2.x,
        y: vector1.y * vector2.y,
        z: vector1.z * vector2.z
    };
}

/**
 * Returns the negated coordinates of a vector.
 *
 * @memberof vector3
 *
 * @param {{ x: number, y: number, z: number }} vector - Vector to negate.
 *
 * @returns {{ x: number, y: number, z: number }}
 */
function negate$1(vector) {
    return {
        x: -vector.x === -0 ? 0 : -vector.x,
        y: -vector.y === -0 ? 0 : -vector.y,
        z: -vector.z === -0 ? 0 : -vector.z
    };
}

/**
 * Checks for intersection between two vectors.
 *
 * @memberof vector3
 *
 * @param {{ x: number, y: number, z: number }} vector1 - First vector.
 * @param {number} size1 - First size.
 * @param {{ x: number, y: number, z: number }} vector2 - Second vector.
 * @param {number} size2 - Second size.
 *
 * @returns {boolean}
 */
function pointIntersection$1(vector1, size1, vector2, size2) {
    return (Math.pow((vector1.x - vector2.x), 2) +
        Math.pow((vector1.y - vector2.y), 2) +
        Math.pow((vector1.z - vector2.z), 2) <=
        Math.pow((size1 + size2), 2));
}

var PRECISION$1 = 100000000;
var roundToPrecision$1 = function (value) { return Math.round(value * PRECISION$1) / PRECISION$1; };
/**
 * Returns a vector positioned around another vector.
 *
 * @memberof vector3
 *
 * @param {{ x: number, y: number, z: number }} vector - Center point position.
 * @param {number} distance - Distance from the center point.
 * @param {number} vertical - Vertical radian value.
 * @param {number} horizontal - Horizontal radian value.
 *
 * @returns {{ x: number, y: number, z: number }}
 */
function positionAroundVector3(vector, distance, vertical, horizontal) {
    var xAxis = roundToPrecision$1(Math.cos(vertical) * Math.cos(horizontal));
    var yAxis = roundToPrecision$1(Math.sin(vertical));
    var zAxis = roundToPrecision$1(Math.cos(vertical) * Math.sin(horizontal));
    return {
        x: vector.x + distance * xAxis,
        y: vector.y + distance * yAxis,
        z: vector.z + distance * zAxis
    };
}

/**
 * Scales a vector by a value.
 *
 * @memberof vector3
 *
 * @param {{ x: number, y: number, z: number }} vector - Vector to scale.
 * @param {number} value - Value to scale by.
 *
 * @returns {{ x: number, y: number, z: number }}
 */
function scale$1(vector, value) {
    return {
        x: vector.x * value,
        y: vector.y * value,
        z: vector.z * value
    };
}

/**
 * Subtracts two vectors and returns the result.
 *
 * @memberof vector3
 *
 * @param {{ x: number, y: number, z: number }} vector1 - First vector.
 * @param {{ x: number, y: number, z: number }} vector2 - Second vector.
 *
 * @returns {{ x: number, y: number, z: number }}
 */
function subtract$1(vector1, vector2) {
    return {
        x: vector1.x - vector2.x,
        y: vector1.y - vector2.y,
        z: vector1.z - vector2.z
    };
}

/**
 * Loops through the dimensions of a vector.
 * Starts at zero, so keep in mind that the number of callbacks will be the dimension sizes +1;
 *
 * @memberof vector3
 *
 * @param {{ x: number, y: number, z: number }} vector - Vector to traverse.
 * @param {function({ x: number, y: number, z: number })} callback - Callback for each step.
 * @param {number?} step - Step size (default: 1).
 */
function traverse$1(vector, callback, step) {
    if (step === void 0) { step = 1; }
    for (var x = 0; x <= vector.x; x += step) {
        for (var y = 0; y <= vector.y; y += step) {
            for (var z = 0; z <= vector.z; z += step) {
                callback({ x: x, y: y, z: z });
            }
        }
    }
}

/**
 * Vector2 utilities module.
 * @module
 */



var vector3 = Object.freeze({
	add: add$1,
	distance: distance$1,
	divide: divide$1,
	dot: dot$1,
	length: length$1,
	multiply: multiply$1,
	negate: negate$1,
	pointIntersection: pointIntersection$1,
	positionAroundVector3: positionAroundVector3,
	scale: scale$1,
	subtract: subtract$1,
	traverse: traverse$1
});

export { animation, array, color, dom, interactivity, math, misc, splines, vector2, vector3 };
//# sourceMappingURL=jslib.js.map
