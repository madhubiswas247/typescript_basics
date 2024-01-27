var MyClass3 = /** @class */ (function () {
    function MyClass3() {
        var _this = this;
        this.name = "mou";
        this.getName = function () {
            return _this.name;
        };
    }
    return MyClass3;
}());
var c2 = new MyClass3();
var g = c2.getName;
// Prints "MyClass" instead of crashing
console.log(g());
