var Box6 = /** @class */ (function () {
    function Box6() {
        this.content = "";
    }
    Box6.prototype.sameAs = function (other) {
        return other.content === this.content;
    };
    return Box6;
}());
var gy = new Box6();
console.log(gy.sameAs(gy));
var my = new Box6();
console.log(gy.sameAs(my));
