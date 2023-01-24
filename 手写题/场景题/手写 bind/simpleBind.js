Function.prototype.bind = function (scope) {
  let fn = this;

  return function () {
    let args = arguments;
    return fn.apply(scope, args);
  };
};
