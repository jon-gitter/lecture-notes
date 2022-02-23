//below is located just below the let ctx = document.getElementBy ID ('my-chart');

// LOCAL STORAGE CONTINUED

// step 3: get it out of local storage
let retrievedGoats = localStorage.getItem('goats');

// step 4: parse our data for our code to read

let parsedGoats = JSON.parse(retrievedGoats);




// step 5: use the data that came out of local storage
// going just above the instantiation of original constructor
if (retrievedGoats) {
  allGoats = parsedGoats;
} else {
  new Goat('bunny-goat', 'png');
  new Goat('cool-goat');
  new Goat('cruisin-goat');
  new Goat('float-your-goat');
  new Goat('goat-out-of-hand');
  new Goat('kissing-goat');
  new Goat('sassy-goat');
  new Goat('smiling-goat');
  new Goat('sweater-goat');
}




//// **** START HERE FOR NOTES ***** ////

if (votesAllowed === 0) {
  myContainer.removeEventListener('click', handleClick);

  renderChart();

  /// LOCAL STORAGE BEGINS

  // step 1: stringify our data  remember allGoats is the array that housed all our objects from the constructor
  let stringifiedGoats = JSON.stringify(allGoats);

  // step 2: set the item into local storage
  localStorage.setItem('goats', stringifiedGoats);



}