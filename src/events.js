(function() {
    'use strict';
    var timeIsActive = false;

    window.addEventListener('click', handleClick, false);
    window.addEventListener('touchstart', handleTouch, false);

    elm.dom.time.addEventListener('click', handleTimeClick, false);
    elm.dom.time.addEventListener('touchstart', handleTimeTouch, false);

    //////





    function handleClick(event) {
        console.log('clicked on the canvas!');
        var x = event.clientX;
        var y = event.clientY;

        var what = setColor(y);
        if (timeIsActive) {
            console.log('canvas changed time color');
            color.setOther(what, x);
            deactivateTime();
        } else {
            color.set(what, x);
        }

    }
    function handleTouch(event) {
        console.log('tapped on the canvas!');
        var x = event.touches[0].clientX;
        var y = event.touches[0].clientY;
        event.preventDefault();

        var what = setColor(y);
        if (timeIsActive) {
            console.log('canvas changed time color');
            color.setOther(what, x);
            deactivateTime();
        } else {
            color.set(what, x);
        }
    }

    function handleTimeClick(e) {
        console.log('clicked on the time!');
        activateTime();

        e.stopPropagation();
    }
    function handleTimeTouch(e) {
        console.log('tapped on the time!');
        // var x = e.touches[0].clientX;
        // var y = e.touches[0].clientY;
        activateTime();
        e.preventDefault();
        e.stopPropagation();
    }

    function setColor(y) {
        var check = y / elm.height;
        var which;
        if (check > 2 / 3) {
            which = 'l';
        } else if (check > 1 / 3 && check <= 2 / 3) {
            which = 's';
        } else {
            which = 'h';
        }
        return which;
    }

    function deactivateTime() {
        timeIsActive = false;
        elm.dom.time.classList.remove('active');
    }

    function activateTime() {
        timeIsActive = true;
        elm.dom.time.classList.add('active');
    }
})();