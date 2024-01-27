var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.prototype.getcount = function () {
        return Foo.count;
    };
    Foo.count = 0;
    (function () {
        try {
            var lastInstances = 'hello';
            Foo.count += lastInstances.length;
        }
        catch (_a) { }
    })();
    return Foo;
}());
var b5 = new Foo();
console.log(b5.getcount());
