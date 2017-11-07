// transforming classed based components to with class properties in ES6
// in babelrc file we added the plugin for transform-class-properties
// in package.json we added babel-plugin-transform-class-properties

class OldSyntax {
    constructor() {
        this.name = 'Mike';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
        return `Hi, my name is ${this.name}`;
    }
}
const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

// ------------------

class NewSyntax {
    name = 'Jen';
    getGreeting = () => {
        return `Hi, my name is ${this.name}`;
    }
}
const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());