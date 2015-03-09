(function() {
    'use strict';

    window.color = {
        current: getColor,
        currentOther: getOtherColor,
        set: setColor,
        setOther: setOtherColor,
        determine: determineHSL,
        convert: rgbToHSL,
        record: setHSL,
        recordOther: setOtherHSL
    };

    //////





    function getColor() {
        //what is the background color
        return elm.dom.canvas.style.backgroundColor;
    }

    function getOtherColor() {
        return elm.dom.time.style.color;
    }

    function setColor(what, value) {
        /* jshint validthis: true */
        var current = this.current();
        current = this.determine(current);

        var data = prepareHSL(what, value, current);
        var h = data[0], 
            s = data[1],
            l = data[2];       
        // console.log([h, s, l]);
        elm.dom.canvas.style.backgroundColor = 'hsl(' + h + ', ' + s + ', ' + l + ')';

        // document our colors
        /* jshint validthis: true */
        this.record();
    }

    function setOtherColor(what, value) {
        /* jshint validthis: true */
        var current = this.currentOther();
        current = this.determine(current);

        var data = prepareHSL(what, value, current);
        var h = data[0], 
            s = data[1],
            l = data[2];       

        elm.dom.time.style.color = 'hsl(' + h + ', ' + s + ', ' + l + ')';

        // document our colors
        /* jshint validthis: true */
        this.recordOther();
    }

    function prepareHSL(what, value, current) {
        // console.log('preparing hsl\n');
        // console.log([what, value, current]);
        var h, s, l;
        if (what === 'h') {
            h = value / elm.width * 360;
            s = (current[1] * 100).toPrecision(3) + '%';
            l = (current[2] * 100).toPrecision(3) + '%';
        } else if (what === 's') {
            h = current[0] * 360;
            s = (value / elm.width * 100).toPrecision(3) + '%';
            l = (current[2] * 100).toPrecision(3) + '%';
        } else if (what === 'l') {
            h = current[0] * 360;
            s = (current[1] * 100).toPrecision(3) + '%';
            l = (value / elm.width * 100).toPrecision(3) + '%';
        } else {
            console.log('you\'ve got issues with your color events');
            return false;
        }
        return [h, s, l];
    }

    function determineHSL(rgb) {
        // var rgb = elm.dom.canvas.style.backgroundColor;
        //confirm we got rgb
        var type = typeof rgb;
        var values;
        if (type === 'string') {
            // does it contain rgb?
            if (rgb.indexOf('rgb(') !== -1) {
                var cut = rgb.replace('rgb(', '');
                cut = cut.replace(')', '');
                values = cut.split(', ');
            } else {
                console.log('you are not getting a good string for rgb');
                return false;
            }
        } else {
            console.log('you are not getting a string for rgb');
            return false;
        }

        // prepare our values
        values[0] = Number(values[0]);
        values[1] = Number(values[1]);
        values[2] = Number(values[2]);

        var convert = rgbToHSL(values[0], values[1], values[2]);
        return convert;
    }

    function setHSL() {
        /* jshint validthis: true */
        var current = this.current();
        current = this.determine(current);
        
        elm.hue = current[0];
        elm.saturation = current[1];
        elm.lightness = current[2];
    }

    function setOtherHSL() {
        /* jshint validthis: true */
        var current = this.currentOther();
        current = this.determine(current);
        
        elm.other_hue = current[0];
        elm.other_saturation = current[1];
        elm.other_lightness = current[2];
    }

    // http://stackoverflow.com/a/9493060
    function rgbToHSL(r, g, b){
        r /= 255;
        g /= 255;
        b /= 255;
        
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;

        if(max == min){
            h = s = 0; // achromatic
        }else{
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch(max){
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }

        return [h, s, l];
    }
})();