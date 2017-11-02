class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    // method
    getGreeting() {
        // return 'Hi ' + this.name + '!';
        // template string using backticks to replace the above example
        return `Hi, I'm ${this.name}.`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

//subclass uses extends so that Student can use Person
class Student extends Person {
    constructor(name, age, major) {
        // super calls the parent function
        super(name, age);
        this.major = major;
    }
    // if there is a major, return true
    hasMajor() {
        // if (this.major){
        //     return this.major;
        // }
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
}
    getGreeting() {
        let greeting = super.getGreeting();

        // if homeLocation has a truthy value, return the location
        if (this.homeLocation) {
            greeting += ` I'm from ${this.homeLocation}.`
        }
        return greeting;
    }
}

const me = new Traveler('Tony Wahula', 29, 'Charlotte, NC');
console.log(me.getGreeting());

const other =  new Traveler();
console.log(other.getGreeting());

// const me = new Student('Tony Wahula', 29, 'Computer Science');
// console.log(me.getDescription());

// const other =  new Student();
// console.log(other.getDescription());