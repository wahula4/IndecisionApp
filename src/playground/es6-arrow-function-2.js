// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments); must use es5 to access arguments
    return a + b;
}
console.log(add(55, 1));


// this keyword - no longer bound

const user = {
    name: 'Tony',
    cities: ['Denver', 'Charlotte', 'Raleigh'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());


const multiplier = { 
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy )
    }
};

console.log(multiplier.multiply());