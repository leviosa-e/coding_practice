Promise.prototype.myCatch = function (onRejected) {
  return Promise.prototype.then(null, onRejected);
};
