(function() {
    'use strict';
    var timeIsActive = false;

    window.addEventListener('click', handleClick, false);
    window.addEventListener('touchstart', handleTouch, false);

    elm.dom.time.addEventListener('click', handleTimeClick, false);
    elm.dom.time.addEventListener('touch', handleTimeTouch, false);

    //////





    function handleClick(e) {
        console.log('clicked on the canvas!');
        var x = e.clientX;
        var y = e.clientY;

        var what = setColor(y);
        if (timeIsActive) {
            console.log('canvas changed time color');
            color.setOther(what, x);
            deactivateTime();
        } else {
            color.set(what, x);
        }

        e.preventDefault();
    }
    function handleTouch(e) {}

    function handleTimeClick(e) {
        console.log('clicked on the time!');
        activateTime();
        console.log(e);

        e.preventDefault();
        e.stopPropagation();
    }
    function handleTimeTouch(e) {
        console.log(e);
        
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