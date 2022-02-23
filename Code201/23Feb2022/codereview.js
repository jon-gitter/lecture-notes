let randomIndexes = []; // will be populated with 6 unique numbers 
//push - add to the end of the array 

function renderImgs() {
  while (randomIndexes.length < 6) {
    let randoNum = getRandomIndex();
    while (!randomIndexes.includes(randoNum)) {
      randomIndexes.push(randoNum);
    }
  }

  // .shift() removes the first element in an array
  let imgOneIndex = randomIndexes.shift();
  let imgTwoIndex = randomIndexes.shift();
  let imgThreeIndex = randomIndexes.shift();

  imgOneIndex.src = allMerch[imgOneIndex].src;
  imgOneIndex.alt = allMerch[imgOneIndex].name;
  // line 20 could be allMerch[imgOneIndex].views = allMerch[imgOneIndex].views + 1
  allMerch[imgOneIndex].views += 1;


  imgTwoIndex.src = allMerch[imgTwoIndex].src;
  imgTwoIndex.alt = allMerch[imgTwoIndex].name;
  allMerch[imgTwoIndex].views += 1;

  imgThreeIndex.src = allMerch[imgThreeIndex].src;
  imgThreeIndex.alt = allMerch[imgThreeIndex].name;
  allMerch[imgThreeIndex].views += 1;

}


