var MyClass = /** @class */ (function () {
    function MyClass() {
        this.name = "MyClass";
    }
    MyClass.prototype.getName = function () {
        return this.name;
    };
    return MyClass;
}());
var c = new MyClass();
//   const obj = {
//     name: "obj",
//     getName: c.getName,
//   };
// Prints "obj", not "MyClass"
console.log(c.getName());
