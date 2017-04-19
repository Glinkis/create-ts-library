export default function getElementAbsolutePosition(element) {
    var top = 0;
    var left = 0;
    do {
        top += element.offsetTop || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
    } while (element);
    return { left: left, top: top };
}
;
//# sourceMappingURL=getElementAbsolutePosition.js.map