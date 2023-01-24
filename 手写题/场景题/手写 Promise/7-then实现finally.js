Promise.prototype.myFinally = function (func) {
  return this.then(func, func);
};
