// Exercise 4
// ----------

let foodPairings = {
  burgers: "beer",
  fish: "white wine",
  beef: "red wine",
  strawberries: "cream",
};

const converter = (obj) => {
  const food = Object.keys(obj);
  const drink = Object.values(obj);
  const Pairings = [food, drink];
  return Pairings;
};

console.log(converter(foodPairings));
