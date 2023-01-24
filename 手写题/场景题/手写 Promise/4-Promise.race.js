Promise.myRace = function (iterable) {
  return new Promise((resolve, reject) => {
    let arr = Array.from(iterable);
    arr.forEach((item) => {
      Promise.resolve(item).then(resolve, reject);
    });
  });
};
