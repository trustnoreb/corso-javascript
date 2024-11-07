// ACTIVATING STRICT MODE
'use strict';

// let hasDriversLicence = true;
// const passTest = true;

// if(passTest) hasDriverLicence = true;
// if(hasDriversLicence) console.log('I can drive :D');

// const interface = 'Audio'; // errore perchè interface è riservata
// const private = 534;
// const if = 23;

//----------------------------------------------------------

// FUNCTIONS
// function logger(){
//     console.log(`My names is Jonas`);
// }

// calling / running / invoking
// logger();

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
// function calAge1(birthday){
//     return 2037 - birthday;
// }

//const age1 = calAge1(2002);
//console.log(age1);

//Expressions
// const calcAge2= function(birthday){
//     return 2037 - birthday;
// }

//const age2 = calcAge2(2002);

//----------------------------------------------------------

// ARROW FUNCTIONS
//const calcAge3 = birthYear => 2037 - birthYear;
//const age3 = calcAge3(1991);
//console.log(age3);

// const yearsUntilRetirement = (birthYear, firstname) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstname} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));
//----------------------------------------------------------

// FUNCTIONS CALLING OTHER FUNCTIONS

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
//     return juice;
// }

// console.log(fruitProcessor(2,3));
//----------------------------------------------------------

//INTRODUCTION TO ARRAYS
// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// let friends = [friend1, friend2, friend3];
// console.log(friends);

// const y = new Array (1991, 1984, 2008, 2020);
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length -1]);

// friends[2] = 'Jay';
// console.log(friends);

// friends = ['Bob', 'Allis'];
// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedmann', 2037 -  1991];

//Exercices 
// const calcAge = function (birthYear){
//     return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length -1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years.length -1)];
// console.log(ages);
//----------------------------------------------------------

//BASIC ARRAY OPERATIONS (METHODS)

// const friends = ['Michael', 'Steven', 'Peter'];
// const newLenght = friends.push('Jay');
// console.log(friends);
// console.log(newLenght);

// friends.unshift('John');
// console.log(friends);

// const popped = friends.pop(); // last
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob')); // -1

// friends.push(23);
// console.log(friends.includes('Steven')); //true
// console.log(friends.includes('Bob')); //false
// console.log(friends.includes('23')); //false
// console.log(friends.includes(23)); //true
//----------------------------------------------------------

// INTRODUCTION TO OBJECTS
// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steve']
// ]

// const jonasObj = {
//     firstName : 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steve']
// }

// console.log(jonasObj);
//----------------------------------------------------------

// DOT VS BRACKET NOTATION

//dot notation
// console.log(jonasObj.lastName);
//bracket notation
// console.log(jonasObj['lastName']);

// const nameKey = 'Name';
// console.log(jonasObj[ 'first' + nameKey]);
// console.log(jonasObj[ 'last' + nameKey]);

//console.log(jonas.'last' + nameKey); //error

// const interestedIn = prompt('What do you want to do know about Jonas? Choose between firsname, lastName, age, job and friends');

// if(jonasObj[interestedIn]){
//     console.log(jonasObj[interestedIn]);
// }else{
//     console.log('Wrong request! Choose between firsname, lastName, age, job and friends');
// }

// jonasObj.location = 'Portugal';
// jonasObj['twitter'] = '@jonasschmedtman';
// console.log(jonasObj);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
// console.log(`${jonasObj.firstName} has ${jonasObj.friends.length} friends, and his best friend is called ${jonasObj.friends[0]}`);

//----------------------------------------------------------

//OBJECT METHODS
// const jonas = {
//     firstName : 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steve'],
//     hasDriversLicence: true,

    // calcAge: function(){
    //     //console.log(this.birthYear);
    //     return 2037 - this.birthYear;
    // }
//     calcAge: function(){
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function (){
//         console.log(`${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicence === true ? 'a' : 'no' } driver's licence`);
//     }
// }

// console.log(jonas.calcAge());
// console.log(jonas['calcAge()']);
// console.log(jonas.age);

//Challenge -> getSummary
//"Jonas is a 46-year old people teacher, and he has a/no driver's licence"

//----------------------------------------------------------

// ITERATION: THE FOR LOOP
// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep}`);
// }

//----------------------------------------------------------

// LOOPING ARRAY, BREAKING AND CONTINUE
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steve'],
    true
];

let types = [];

for (let i = 0; i < jonasArray.length; i++ ){
    console.log(jonasArray[i], typeof jonasArray[i]);

    //Filling types array
    //types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];
for(let i=0; i< years.length; i++){
    ages.push(2037 - years[i]);
}

console.log(ages);

//continue and break
console.log('---ONLY STRINGS---');
for (let i = 0; i < jonasArray.length; i++ ){
    if(typeof jonasArray[i] !== 'string') continue;
    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log('---BREAK WITH NUMBER---');
for (let i = 0; i < jonasArray.length; i++ ){
    if(typeof jonasArray[i] === 'number') break;
    console.log(jonasArray[i], typeof jonasArray[i]);
}

//----------------------------------------------------------

//LOOPING BACKWARDS AND LOOPS IN LOOPS

//Looping Backwards
for( let i = jonasArray.length -1; i >= 0; i--){
    console.log(i, jonasArray[i]);
}

//Loops in Loops
for(let exercise = 1; exercise < 4; exercise++){
  console.log(`--STARTING EXERCICE ${exercise}--`);  

    for(let rep = 1; rep < 6; rep ++ ){
        console.log(`Exercice ${exercise}: Lifting weight repetition ${rep}`);
    }
}