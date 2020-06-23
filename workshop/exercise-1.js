// Exercise 1
// ----------

let mostPopularFood = [
  "poke bowl",
  "chicken sliders",
  "pork baby back ribs",
  "chicken burritos",
  "chicken sandwich",
  "cauliflower rice bowl",
  "chicken and waffle sliders",
  "parmesan chicken",
  undefined,
];

const fixList = (arr, first, last) => {
  arr.unshift(first);
  arr.pop();
  arr.push(last);
  return arr;
};

const printList = (arr) => {
  arr.forEach(function (element, index) {
    console.log(`${index + 1}. ${element}`);
  });
};

printList(
  fixList(mostPopularFood, "bean burritos", "buffalo-flavoured cauliflower")
);
