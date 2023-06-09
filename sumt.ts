export function sumt(a, b): number {
    return a + b;
}

const _ = require('lodash');

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

_.times(4, () => console.log(greeter.greet()));
