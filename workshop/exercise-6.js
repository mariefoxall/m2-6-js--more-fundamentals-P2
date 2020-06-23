// Exercise 6
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

const getData = (arr, key) => {
  let newArray = [];
  arr.forEach((element) => {
    // console.log(element);
    // console.log(key);
    if (key in element) {
      newArray.push(element[key]);
    }
  });
  console.log(newArray);
  return newArray;
};

getData(staffMembers, "name");
getData(staffMembers, "title");
// getData(staffMembers, "skillLevels");
