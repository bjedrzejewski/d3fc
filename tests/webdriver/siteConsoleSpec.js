describe('Visit all pages, check for no console errors', function() {

    //it('should have the right title - the good old callback way', function(done) {
    //
    //    browser
    //        .url('/')
    //        .getTitle(function(err, title) {
    //            expect(err).toBe(undefined);
    //            expect(title).toBe('d3fc');
    //        })
    //        .call(done);
    //
    //});

    it('iterate through the documentation', function() {

        return browser
            .url('/components/introduction/1-getting-started.html')
            .getTitle().then(function(title) {
                expect(title).toBe('Getting Started');
            });

    });

    it('iterate through the examples', function() {

        return browser
            .url('/examples/')
            .getTitle().then(function(title) {
                expect(title).toBe('Examples');
            });

    });

    // NOTE: On Node 0.10 and below, the generator `function*` syntax in the following
    // test will break the parser. Use Babel (`require("babel/register")` in
    // wdio.jasmine.conf.js) or similar to transpile this code for older Nodes.

    //it('should have the right title - the fancy generator way', function* () {
    //
    //    yield browser.url('/');
    //    var title = yield browser.getTitle();
    //    expect(title).toBe('d3fc');
    //
    //});

});