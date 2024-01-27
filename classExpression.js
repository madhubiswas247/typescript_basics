var someClass = /** @class */ (function () {
    function class_1(value) {
        this.content = value;
    }
    return class_1;
}());
var m = new someClass("Hello, world");
console.log(m.content);
var m1 = new someClass(1);
console.log(m1.content);
