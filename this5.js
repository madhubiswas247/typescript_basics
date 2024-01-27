var MyClass6 = /** @class */ (function () {
    function MyClass6() {
        this.name = "MyClass";
    }
    MyClass6.prototype.getName = function () {
        return this.name;
    };
    return MyClass6;
}());
var c6 = new MyClass();
// OK
c6.getName();
// Error, would crash
var g4 = c6.getName;
console.log(g4());
