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
export { InteractionData };
//# sourceMappingURL=InteractionData.js.map