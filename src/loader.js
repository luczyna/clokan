(function() {
    'use strict';

    window.sizeCanvas = function() {
        elm.dom.canvas.height = elm.height;
        elm.dom.canvas.width = elm.width;

        elm.dom.time.style.top = elm.height / 2 + 'px';
    };

    // first set up the size of the canvas
    sizeCanvas();

    // create a global context variable
    window.canvas = elm.dom.canvas.getContext('2d');

    // set up the time
    setTime(elm.storage.start);

    var tilThen = 60 - elm.storage.start.getSeconds();
    
    var wait = window.setTimeout(startUpdate, tilThen * 1000);

    //////





    function setTime(input) {
        var hours = input.getHours();
        var xm = (hours > 12) ? 'pm' : 'am';
        hours = (hours > 12) ? hours - 12 : hours;

        var minutes = input.getMinutes();

        if (clock.hour() !== hours) {
            clock.setHour(hours);
        }

        if (minutes < 10) {
            minutes = String('0' + minutes);
        }
        clock.setMinute(minutes);

        if (clock.xm() !== xm) {
            clock.setXM(xm);
        }
    }

    function startUpdate() {
        updateTime();
        elm.storage.time = window.setInterval(updateTime, 1000 * 60);
    }

    function updateTime() {
        var now = new Date();
        setTime(now);
    }

})();