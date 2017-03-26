/*'use strict';
if (document.documentElement.matches === undefined) { // (1)

    Object.defineProperty(Element.prototype, 'firstElementChild', { // (2)
        get: function() {
            var el = this.firstChild;
            do {
                if (el.nodeType === 1) {
                    return el;
                }
                el = el.nextSibling;
            } while (el);

            return null;
        }
    });
}*/
