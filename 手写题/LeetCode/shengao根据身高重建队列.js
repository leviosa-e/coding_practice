var reconstructQueue = function (people) {
  people.sort((a, b) => {
    if (a[0] - b[0] < 0) return 1;
    else if (a[0] - b[0] > 0) return -1;
    else if (a[1] - b[1] < 0) return -1;
    else if (a[1] - b[1] > 0) return 1;
    else return 0;
  });
  let i = 0;
  console.log(people);
  while (i < people.length) {
    if (i > people[i][1]) {
      console.log(people[i]);
      people.splice(people[i][1], 0, people[i]);
      people.splice(i + 1, 1);
    }
    i++;
  }
  console.log(people);
  return people;
};

reconstructQueue([
  [7, 0],
  [4, 4],
  [7, 1],
  [5, 0],
  [6, 1],
  [5, 2],
]);
