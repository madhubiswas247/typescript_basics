var StatisClass = /** @class */ (function () {
    function StatisClass() {
    }
    StatisClass.printX = function () {
        console.log(StatisClass.x);
    };
    StatisClass.x = 0;
    return StatisClass;
}());
console.log(StatisClass.x);
StatisClass.printX();
