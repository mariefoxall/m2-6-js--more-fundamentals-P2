// Exercise 7
// ----------

let foodPairings = {
  burgers: "beer",
  fish: "white wine",
  beef: "red wine",
  strawberries: "cream",
};

const createRecommendations = (obj) => {
  let keysArray = Object.keys(obj);
  let sentenceArray = [];
  keysArray.forEach((key) => {
    sentenceArray.push(`With ${key}, it is best to have ${obj[key]}.`);
    // console.log sentenceArray;
  });
  return sentenceArray;
};

const printRecommendations = (arr) => {
  arr.forEach((element) => {
    console.log(element);
  });
};

// createRecommendations function

// printRecommendations function

// function call (done)
printRecommendations(createRecommendations(foodPairings));
