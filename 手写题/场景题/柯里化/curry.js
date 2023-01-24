const curry = (func, ...args) =>
  args.length >= func.length
    ? func(...args)
    : (..._args) => curry(func, ...args, ..._args);

const add1 = (a, b, c) => {
  return a + b + c;
};

const add = curry(add1);
console.log(add(1, 2, 3));
console.log(add(1, 2)(3));
console.log(add(1)(2)(3));
