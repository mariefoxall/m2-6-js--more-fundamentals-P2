// Exercise 5
// ----------

const foodPairings = {
  burgers: "beer",
  fish: "white wine",
  beef: "red wine",
  strawberries: "cream",
};

const getValue = (object, property) => {
  if (property in object) {
    // console.log("yes");
    // console.log(object[property]);
    return object[property];
  }
  return "not available";
};

expect(getValue(foodPairings, "burgers"), "beer");
expect(getValue(foodPairings, "beef"), "red wine");
expect(getValue(foodPairings, "sushi"), "not available");

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log("✅ Test succeeded");
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
