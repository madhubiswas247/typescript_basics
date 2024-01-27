var NameChecker = /** @class */ (function () {
    function NameChecker() {
    }
    NameChecker.prototype.check = function (s) {
        //Parameter 's' implicitly has an 'any' type.
        // Notice no error here
        return s.toLowerCase() === "ok";
    };
    return NameChecker;
}());
var c = new NameChecker();
var a = c.check('Hiiii');
console.log(a);
