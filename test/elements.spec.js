describe('my Elements', function() {
    it('should contain a width and height', function() {
        var type = typeof elm;
        expect(type).toBe('object');

        expect(elm.width).not.toBe(null);
        expect(elm.height).not.toBe(null);
    });

    it('should have some dom elements', function() {
        var type = typeof elm.dom;

        expect(type).toBe('object');
    });
    
});