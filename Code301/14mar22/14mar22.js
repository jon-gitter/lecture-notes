'use strict';


// hoisting
let sum = add(2, 3);
console.log(sum);


// vanilla JS function declaration
function add(a, b) {
  return a + b;
}

// vanilla JS function expression
let myAdd = function (a, b) {
  return a + b;
}

//----- the above code won't work because of hoisting, need to declare functions before calling them. computer reads and stores first then executes code --------- //


// arrow functions

let arrowAdd = (a, b) => a + 6;

let arrowAdd = a => {
  // when using this it doesn't just use the function itself, it can use other things when using this in an arrow function
  this
  return a + 6;
};

// classes

// old way, vanilla constructor
function CountryState(name, capital) {
  this.name = name;
  this.capital = capital;
  this.isAmazing = true;
}

let washington = new CountryState('Washington', 'Olympia');
console.log(washington);

// new way, class style
class CountryEntity {
  constructor(name, capital) {
    this.name = name;
    this.capital = capital;
  }
}

let classWashington = new CountryEntity('Washington', 'Olympia');
console.log(classWashington);

class Province extends CountryEntity {
  constructor(name, capital, premier) {
    // super passes over previous values
    super(name, capital);
    this.premier = premier;
  }
  wow = () => {
    console.log('wow');
  }
}

let britishColumbia = new Province('British Columbia', 'Victoria', 'John Horgan');
console.log(britishColumbia);


// only british columbia can use the wow method
britishColumbia.wow();
britishColumbia.awesome();


classWashington.awesome();
classWashington.wow();


// note - 10:57am!!! to go over 



////// CODE CHALLENGE //////

// for each 11:23am
let array = [1, 2, 3];
let newArray = [];

array.forEach((element) => {
  // can't use ++ in arrow functions
  newArray.push(element + 1);
});

console.log(newArray);
