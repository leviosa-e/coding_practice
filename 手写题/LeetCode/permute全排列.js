var permute = function (nums) {
  let rst = [];
  recur([], nums);
  return rst;
  function recur(record, options) {
    if (options.length === 0) {
      // console.log(record);
      rst.push(record.concat());
      console.log(rst);
      return;
    }
    options.forEach((item, index) => {
      record.push(item);
      options.splice(index, 1);
      recur(record, options);
      record.pop();
      options.splice(index, 0, item);
    });
  }
};

permute([1, 2, 3]);
