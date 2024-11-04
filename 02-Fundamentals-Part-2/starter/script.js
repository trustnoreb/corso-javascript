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

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

//----------------------------------------------------------

// FUNCTIONS DECLARATIONS VS EXPRESSIONS