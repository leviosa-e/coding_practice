function flatten(target) {
  let rst = [];
  for (const item of target) {
    if (Array.isArray(item)) {
      rst = rst.concat(flatten(item));
    } else {
      rst.push(item);
    }
  }
  return rst;
}

const arr = [1, [2, [3, 4]]];
console.log(flatten(arr));
