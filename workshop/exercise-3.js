// Exercise 3
// ----------

let mostPopularFood = [
  "bean burritos",
  "poke bowl",
  "chicken sliders",
  "pork baby back ribs",
  "chicken burritos",
  "chicken sandwich",
  "cauliflower rice bowl",
  "chicken and waffle sliders",
  "parmesan chicken",
  "buffalo-flavored cauliflower",
];

const printAlphabeticalFood = (array) => {
  let rankedPopularFood = array.map(function (currentValue, index) {
    return `${currentValue} (${index + 1})`;
  });
  let newArray = rankedPopularFood.sort();
  newArray.forEach(function (element) {
    console.log(element);
  });
};

printAlphabeticalFood(mostPopularFood);
