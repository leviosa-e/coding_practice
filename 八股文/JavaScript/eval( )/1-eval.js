let a = 1,
  b = 2,
  arr = [a, b],
  arr2 = [a, [b]];

function add(x, y) {
  return x + y;
}

console.log(eval("[a, b]")); // [ 1, 2 ]
console.log(eval("[1, 2]")); // [ 1, 2 ]
console.log(eval("add(" + arr + ")")); // 3
console.log(eval("add(" + arr2 + ")")); // 3
// 不管数组嵌套多少层，eval 都会拍平？
