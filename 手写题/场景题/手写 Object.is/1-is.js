function is(x, y) {
  if (x === y) {
    // 修正 +0 === -0 true
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // 修正 NaN === NaN false
    return x !== x && y !== y;
  }
}

console.log(is(+0, -0)); // false
console.log(is(NaN, NaN)); // true
