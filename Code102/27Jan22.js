// write a function to make a sandwich

// declare function
function makeASandwhich() { }

// created a variable thats equal to a function
let makeMeASANDwhich = function () {

}

// both of the above examples are the same it just depends on your style, known as a "style guide" in companys that says which way to use

//
function makeASandwhich() {//all your code/logic lives here
}

//---------------------------------------------------------


// Step 1. gather ingredients bread, meat, cheese, mayo, grey poupon, lettuce

function makeASandwhich() {
    let bread = 'Sourdough';
    let meat = 'Ham';
    let cheese = 'Swiss';
    let condiments = 'Mayo & Grey Poupon';
    let veg = 'lettuce';

    //step 4 can output to console log
    //console.log('HERE I AM')
    //step 2. put it all together
    //return 'Here is your sandwhich on' + bread + 'containing' + meat + ',' + cheese + ',' + condiments + ',' + veg;

    //step 5 return your result
    let sandwhich = 'Here is your sandwhich on' + bread + 'containing' + meat + ',' + cheese + ',' + condiments + ',' + veg;
    console.log('Sandwhich', sandwhich);

    return sandwhich
}

//step 3 invoke/call this function, can be done as many times as you want. if you have the same commands multiple times below it. Ex: copy past below line 43 to 44, 45, etc.

makeASandwhich();


//---------------------------------------------------------

let bread = 'Sourdough';
let meat = 'Ham';
let cheese = 'Swiss';
let condiments = 'Mayo & Grey Poupon';
let veg = 'lettuce';
//arguments = function input, located inside function but above the function

//pass data into your functions

function makeASandwhich(bread, meat, cheese, condiments, veg) {

    let sandwhich = 'Here is your sandwhich on' + bread + 'containing' + meat + ',' + cheese + ',' + condiments + ',' + veg;
    console.log('Sandwhich', sandwhich);

    return sandwhich
}

//invoke/call this function, this expects what is listed as a function in line 57 like sourdough, ham, etc. inside the paranthasis.

makeASandwhich();

//---------------------------------------------------------


function sandwhichIngredients() {
    //ask the user for name
    //ask the user for their favorite flavor
    let bread = prompt('Choose your bread');
    let ingredients = bread + //etc
return ingredients
}

//---------------------------------------------------------


function promptUserForTime() {
    //step 1 prompt user for time
    let tod = prompt('What hour is it?');
    //step 2 decide what response to return to the user
    let response = 'Welcome';
    //step 3 create logic that changes response
    if (tod > 18) {
        response = 'Good Evening!';
    } else if (tod > 12) {
        response = 'Good Afternoon!';
    } else if (tod >= 0) {
        response = 'Good Morning';
    }
    return alert(response);

}

//function call a.k.a function invocation
promptUserForTime();


//---------------------------------------------------------


