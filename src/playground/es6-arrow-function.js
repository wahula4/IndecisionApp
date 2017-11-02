// es5
function square(x) {
    return x * x;
};
console.log(square(3));

// es6
// const squareArrow = (x) => {
//     return x * x;
// };

//if there is only a single expression it can be written inline
const squareArrow = (x) => x * x;

console.log(squareArrow(8)); 

// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];
// }

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Tony Wahula'));