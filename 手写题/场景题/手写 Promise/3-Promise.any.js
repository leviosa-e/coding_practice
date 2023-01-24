Promise.myAny = function (iterable) {
  return new Promise((resolve, reject) => {
    let arr = Array.from(iterable),
      len = arr.length,
      rst = [],
      cnt = 0;
    if (len === 0) return reject(arr);
    for (let i = 0; i < len; i++) {
      Promise.resolve(arr[i])
        .then((value) => {
          resolve(value);
        })
        .catch((err) => {
          cnt++;
          rst[i] = err;
          if (cnt === len) reject(new AggregateError(rst));
        });
    }
  });
};
