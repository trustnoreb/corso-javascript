// let js='amazing';
// if(js==='amazing') alert('Javascript is FUN')

// 40 + 8 + 10 + 33 
// console.log(40 + 8 + 10 + 33);

// console.log("Jonas");
// console.log(99);

// let firstName = "Bob";
// console.log(firstName);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);

//----------------------------------------------------------

//DYNAMIC TYPING
javascriptIsFun = 3;
console.log(typeof javascriptIsFun);

javascriptIsFun = 'Bob';
console.log(typeof javascriptIsFun);

//----------------------------------------------------------

//LET, VAR E CONST
//let age = 30;
//age = 31; //mutiamo la variabile o la assegniamo di nuovo

//const birthYear = 1991;
//birthYear= 1990; Questo darebbe errore

//const job; darà errore

//----------------------------------------------------------

//BASIC OPERATORS

//Math operators
const ageJonas= 2037-1991;
const ageSarah = 2037-2018;
console.log(ageJonas, ageSarah);

const now = 2037
const ageJonas1= now-1991;
const ageSarah1 = now-2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas /10, 2**3);

//const firstName = 'Jonas';
//const lastName = 'Schmedtmann';
//console.log(firstName + '' + lastName);

let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100 
x++; // x = x + 1
x--; // x = x - 1

console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah); // >,<,<=,>=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now- 2018);

//----------------------------------------------------------

// OPERATOR PRECEDENCE

let z,y;
z = y = 25 - 10 - 5; // 10
//In questo caso l'assegnazione avviene da destra a sinistra
console.log(z, y);

const avgAge = ageJonas + ageSarah / 2;
console.log(avgAge);

//----------------------------------------------------------

//STRINGS AND TEMPLATE LITERALS
const firstName = 'Jonas';
const job = 'teacher';
const birthday = 1991;
const year = 2037;

//const jonas = "I'm " + firstName + ', a ' + (year - birthday) + ' years old ' + job + '!';
//console.log(jonas);

//const jonasnew = `I'm ${firstName}, a ${year-birthYear} years old ${job}!`;
//console.log(jonasnew);

console.log(`Just a regular string...`);

//Multiple lines strings
// \n\
console.log('Strings with \n\ multiple \n\ lines');
// backtip
console.log(`Strings with
multiple
lines`);

//----------------------------------------------------------

// If / else
const age = 15;
//const isOldEnough = age >=18;

if(age >=18){
    console.log(`Congrats !`);
}else{
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

let birthYear = 2012;
let century=0;
if( birthYear <= 2000){
     century = 20;
}else{
     century = 21;
}

console.log(century);

//----------------------------------------------------------

// TYPE CONVERSION AND COERCION

//Type Conversion
const inputYear = '1991';
console.log(inputYear + 18);
console.log(Number(inputYear));
console.log(Number(inputYear) +18);

console.log(Number("prova")); // Questo da errore: NaN -> is not a number

console.log(typeof NaN); // number (not valid)

console.log(String(23));

// Type Coercion
console.log('I am ' + 23 + ' years old'); // trasforma in stringhe
console.log('23' - '10' - 3); //trasforma in numeri
console.log('23' * '10' * 3); //trasforma in numeri
console.log('23' / '10'); //trasforma in numeri

let n = '1' + 1; //11
n = n - 1; //10
console.log('n', n);

//----------------------------------------------------------

//Truthy and falsy values

//falsy
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

//truthy
console.log('empty object: ',Boolean({}));
console.log(Boolean('Jonas'));

//testing
const money = 0; 
if(money){
    console.log("Don't spend it all");
}else{
    console.log("You should get a job!");
}

let height;
if (height){
    console.log('YAY, height is defined');
}else{
    console.log('height is UNDEFINED');
}
