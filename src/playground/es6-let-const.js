// babel src/playground/es6-let-const.js --out-file=public/scripts/app.js --presets=env,react --watch
// var can be reassigned and redefined
var nameVar = 'Tony'
console.log('nameVar', nameVar);

// let can be assigned but not redefined
let nameLet = 'Jen';
console.log('nameLet', nameLet);  


// const cannot be assigned or redefined
const nameConst = 'Frank';
console.log('nameConst', nameConst);

// block scoping (does not apply to var)

const fullName = 'Tony Wahula';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);