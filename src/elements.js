(function() {
    'use strict';

    window.elm = {
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
            time: document.getElementsByClassName('time')[0],
            hour: document.getElementById('hour'),
            minute: document.getElementById('minute'),
            xm: document.getElementById('xm'),
        }
    };
})();