// Exercise 2
// ----------

const lateComers = ["Felicia", "Charles", "Terry"];
const earlyBirds = ["Ellen", "Jerry", "Jasmine"];

const printGuestOrder = (early, late) => {
  const allGuests = [...early, ...late];
  allGuests.forEach(function (element, index) {
    console.log(`${index + 1}. ${element}`);
  });
  return allGuests;
};

printGuestOrder(earlyBirds, lateComers);
