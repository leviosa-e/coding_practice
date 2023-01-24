Promise.myAllSettled = function (iterable) {
  return new Promise((resolve, reject) => {
    let arr = Array.from(iterable),
      len = arr.length,
      cnt = 0,
      rst = [];
    if (len === 0) return resolve(arr);
    const handleRst = (res, i, status) => {
      cnt++;
      rst[i] = { status, val: res };
      if (cnt === len) {
        resolve(rst);
      }
    };
    arr.forEach((item, i) => {
      Promise.resolve(item)
        .then((value) => {
          handleRst(value, i, "fulfilled");
        })
        .catch((err) => {
          handleRst(err, i, "rejected");
        });
    });
  });
};
