
var test=require("../test.js");
describe("World Frequency", function() {

    it("should return empty", function () {
        var result = test('');
        expect(result).toEqual('');

    });
        it("returns string given one word",function(){
            var result =test('he');
            expect(result).toEqual('he 1');
        });
        it("returns string given two different words",function(){
            var result =test('he is');
            expect(result).toEqual('he 1\r\nis 1');
        });
        it("returns string given duplicated words",function(){
            var result =test('he is he');
            expect(result).toEqual('he 2\r\nis 1');
        });
        it("returns string given duplicated words need to be sorted",function(){
            var result =test('he is is');
            expect(result).toEqual('is 2\r\nhe 1');
        });
        it("returns string given words splited by multiple spaces",function(){
            var result =test('he    is');
            expect(result).toEqual('he 1\r\nis 1');
        });


});



