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
let age = 30;
age = 31; //mutiamo la variabile o la assegniamo di nuovo

const birthYear = 1991;
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

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + '' + lastName);

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
