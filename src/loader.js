(function() {
    'use strict';
    document.addEventListener('DOMContentLoaded', _init, false);

    window.sizeCanvas = function() {
        // console.log('resized!');
        elm.height = window.innerHeight;
        elm.width = window.innerWidth;

        elm.dom.canvas.height = elm.height;
        elm.dom.canvas.width = elm.width;

        elm.dom.time.style.top = elm.height / 2 + 'px';
        elm.dom.time.style.left = elm.width / 2 - elm.dom.time.offsetWidth / 2 + 'px';
    };
    window.addEventListener('resize', sizeCanvas, false);

    

    //////



    function _init() {
        // console.log('ready!');
        // clean up
        document.removeEventListener('DOMContentLoaded', _init, false);

        // first set up the size of the canvas
        sizeCanvas();
        // run it twice to give the resizing a chance
        setTimeout(sizeCanvas, 100);

        // create a global context variable
        window.canvas = elm.dom.canvas.getContext('2d');

        // set up the time
        setTime(elm.storage.start);

        var tilThen = 60 - elm.storage.start.getSeconds();
        
        var wait = window.setTimeout(startUpdate, tilThen * 1000);

        // set up our color
        // color.init();
    }

    function setTime(input) {
        var hours = input.getHours();
        var xm = (hours > 11) ? 'pm' : 'am';
        //how to deal with 12:00AM?
        if (hours > 12) {
            hours -= 12;
        } else if (hours === 0) {
            hours = String(12);
        }

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