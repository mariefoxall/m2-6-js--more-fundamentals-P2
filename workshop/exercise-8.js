// Exercise 8
// ----------

const staffMembers = [
  {
    name: "Jane Smith",
    title: "Web Developer II",
    skillLevels: {
      javascript: 7,
      python: 4,
      sql: 6,
    },
  },
  {
    name: "Frank Castle",
    title: "Web Developer I",
    skillLevels: {
      javascript: 4,
      python: 4,
      sql: 3,
    },
  },
  {
    name: "Steve Rogers",
    title: "Database Admin",
    skillLevels: {
      javascript: 7,
      python: 4,
      sql: 9,
    },
  },
  {
    name: "Chuck Taylor",
    title: "Web Developer III",
    skillLevels: {
      javascript: 8,
      python: 7,
      sql: 8,
    },
  },
  {
    name: "Thor Odinson",
    title: "Web Intern",
    skillLevels: {
      javascript: 4,
      python: 3,
      sql: 6,
    },
  },
];

//1st way - using forEach (has to deal with undefined values)

// const checkJava = (obj) => {
//   if (obj.skillLevels.javascript >= 6) {
//     return obj;
//   }
// };

// const printJava = (arr) => {
//   let printArray = [];
//   arr.forEach((element) => {
//     let result = checkJava(element);
//     if (result != undefined) {
//       printArray.push(result);
//     }
//   });
//   console.log(printArray);
// };

// 2nd way using a filter

const checkJava = (obj) => {
  if (obj.skillLevels.javascript >= 6) {
    return obj;
  }
};

const printJava = (arr) => {
  let printArray = arr.filter(checkJava);

  console.log(printArray);
};

printJava(staffMembers);
