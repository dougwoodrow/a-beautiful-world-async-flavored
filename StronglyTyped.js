// TypeScript
var One = /** @class */ (function () {
    function One(name) {
        this.name = name;
    }
    return One;
}());
var Agent = /** @class */ (function () {
    function Agent(id) {
        this.id = id;
    }
    return Agent;
}());
var neo = new One("Tom Anderson");
var smith = new Agent(1);
smith = neo; // produces compile-time error!
