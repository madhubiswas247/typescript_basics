var MyClass5 = /** @class */ (function () {
    function MyClass5() {
        this.name = "mou";
    }
    MyClass5.prototype.getName = function () {
        return this.name;
    };
    return MyClass5;
}());
var c5 = new MyClass5();
// OK
console.log(c5.getName()); //mou
