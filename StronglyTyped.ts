// TypeScript

interface Computer {
	id: number
}

interface Human {
	name: string
}

class One implements Human {
	name: string;

	constructor(name: string) { this.name = name; }
}

class Agent implements Computer {
	id: number;

	constructor(id: number) { this.id = id; }
}

let neo: One = new One("Tom Anderson");
let smith: Agent = new Agent(1);

smith = neo; // produces compile-time error!