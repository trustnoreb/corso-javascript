// ACTIVATING STRICT MODE
'use strict';

let hasDriversLicence = true;
const passTest = true;

// if(passTest) hasDriverLicence = true;
// if(hasDriversLicence) console.log('I can drive :D');

// const interface = 'Audio'; // errore perchè interface è riservata
// const private = 534;
// const if = 23;

//----------------------------------------------------------

// FUNCTIONS
function logger(){
    console.log(`My names is Jonas`);
}

// calling / running / invoking
logger();

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice;
// }

// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);

//----------------------------------------------------------

// FUNCTIONS DECLARATIONS VS EXPRESSIONS

//Declaration
function calAge1(birthday){
    return 2037 - birthday;
}

const age1 = calAge1(2002);
console.log(age1);

//Expressions
const calcAge2= function(birthday){
    return 2037 - birthday;
}

const age2 = calcAge2(2002);

//----------------------------------------------------------

// ARROW FUNCTIONS
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstname) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstname} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
//----------------------------------------------------------

// FUNCTIONS CALLING OTHER FUNCTIONS

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
    return juice;
}

console.log(fruitProcessor(2,3));