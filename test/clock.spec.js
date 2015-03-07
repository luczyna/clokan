describe('my clock', function() {
    it('should contain some things', function() {
        var type = typeof clock;
        expect(type).toBe('object');

        expect(typeof clock.hour).toBe('function');
    });
    
});