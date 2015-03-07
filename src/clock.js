(function() {
    'use strict';

    window.clock = {
        hour: getHour,
        minute: getMinute,
        xm: getXM,
        setHour: increaseHour,
        setMinute: increaseMinute,
        setXM: changeXM,
    };

    //////





    function getHour() {
        return Number(elm.dom.hour.textContent);
    }

    function getMinute() {
        return Number(elm.dom.minute.textContent);
    }

    function getXM() {
        return elm.dom.xm.textContent;
    }

    function increaseHour(x) {
        elm.dom.hour.textContent = x;
    }

    function increaseMinute(x) {
        elm.dom.minute.textContent = x;
    }

    function changeXM(x) {
        elm.dom.xm.textContent = x;
    }
})();