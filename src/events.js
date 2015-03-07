(function() {
    'use strict';

    window.addEventListener('click', handleClick, false);
    window.addEventListener('touchstart', handleTouch, false);

    elm.dom.time.addEventListener('click', handleTimeClick, false);
    elm.dom.time.addEventListener('touch', handleTimeTouch, false);

    //////





    function handleClick(e) {

        e.preventDefault();
    }
    function handleTouch(e) {}

    function handleTimeClick(e) {

        e.preventDefault();
        e.stopPropogation();
    }
    function handleTimeTouch(e) {
        
        e.stopPropogation();
    }
})();