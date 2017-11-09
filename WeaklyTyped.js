var Human = function Human() {
    var name;
};

var Computer = function Computer() {
    var id;
};

var One = function One(name) {
    this.human = new Human();
    this.human.name = name;
};

var Agent = function Agent(id) {
    this.computer = new Computer();
    this.computer.id = id;
};

var smith = new Agent(1);
var neo = new One("Tom Anderson");

smith = neo; // no problem...