(function() {
    'use strict';

    window.elm: {
        width: window.innerWidth,
        height: window.innerHeight,

        hue: null,
        saturation: null,
        lightness: null,

        storage: {
            start: new Date(),
            time: null,
            pointer: [null, null]
        },

        dom: {
            canvas: document.getElementsByTagName('canvas')[0],
            time: document.getElementByClassName('time')[0],
            hour: document.getElementsById('hour'),
            minute: document.getElementsById('minute'),
            xm: document.getElementsById('xm'),
        }
    };
})();