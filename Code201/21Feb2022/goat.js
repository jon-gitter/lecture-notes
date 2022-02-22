'use strict';

// console.log('hey there hey');

// GLOBAL VARIABLES

let votesAllowed = 15; // will need to decrement in my code to end the voting round
// or let votesAllowed = 0;  // will need to increment in my code to end the voting round

//goat storage
let allGoats = [];


// DOM refrences
let myContainer = document.getElementById('container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let resultsBtn = document.getElementById('show-results-btn');
let showResults = document.getElementById('display-results-list');

// *****constructor******
// you use the fileExtention when having different jpg or png you use this to make sure you're using the correct file type when dealing with different files 
function Goats(name, fileExtension = 'jpg') {
  this.name = name;
  this.views = 0;
  this.clicks = 0;
  this.src = `img/${name}.${fileExtension}`;

  allGoats.push(this);
}

new Goat('bunny-goat', 'png');
new Goat('cool-goat');
new Goat('cruisin-goat');
new Goat('float-your-goat');
new Goat('goat-out-of-hand');
new Goat('kissing-goat');
new Goat('sassy-goat');
new Goat('smiling-goat');
new Goat('sweater-goat');

// console.log(allGoats);


// ******Executable Code*******


// make sure they're random - need a random number between 0 and the length -1
function getRandomIndex() {
  return Math.floor(Math.random() * allGoats.length);
}



//render images
function renderImgs() {
  //instead of hard coding you can do whats below
  let goatOneIndex = getRandomIndex();
  let goatTwoIndex = getRandomIndex();

  //need the validation to make sure they do not show up in the same round
  // note: lab will require you to have 3 unique images per round
  // need a while loop to keep looping in case the two randoms numbers are not the same, using an if statement could still yield the two same pictures
  // hint: consider using a container to store your random indexes and then validate if there are 3 unique numbers in that container
  while (goatOneIndex === goatTwoIndex) {
    goatTwoIndex = getRandomIndex();
  }

  imgOne.src = allGoats[goatOneIndex].src;
  imgOne.alt = allGoats[goatOneIndex].name;
  allGoats[goatOneIndex].views++;

  imgTwo.src = allGoats[goatTwoIndex].src;
  imgTwo.alt = allGoats[goatTwoIndex].name;
  allGoats[goatTwoIndex].views++;
}

renderImgs();


// ***event listeners***

// event listener 1 - clicks

// event handler - call back
function handleClick(event) {
  // decrement against the total votes allowed so when it reaches 0 it stops letting you clicking through photos
  votesAllowed--;
  let imgClicked = event.target.alt;

  //use a for loop to go through array and match the array and increment clicks by one
  for (let i = 0; i < allGoats.length; i++) {
    if (imgClicked === allGoats[i].name) {
      allGoats[i].clicks++
    }
  }
  //rerender 2 new goat images
  renderImgs();

  // once voting has round completed - need to stop the clicks
  if (votesAllowed === 0) {
    myContainer.removeEventListener('click', handleClick);
  }
}

// event #2 - button to show results needs to render list items, don't need to have event listener b/c we don't care about events we just want to pull from our objects
function handleShowResults(event) {
  // if no more votes - then render a list

  if (votesAllowed === 0) {
    for (let i = 0; i < allGoats.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${allGoats[i].name} was viewed ${allGoats[i].views} times, and was voted for ${allGoats[i].clicks} times.`;
      showResults.appendChild(li);
    }
  }
}



// step 2: grab what we want to listen to
myContainer.addEventListener('click', handleClick);


showBtn.addEventListener('click', handleShowResults);





