module.exports = function deepClone(target) {
  let cloneTarget = {};
  for (const key in target) {
    if (typeof target[key] !== "object") {
      cloneTarget[key] = target[key];
    } else {
      cloneTarget[key] = deepClone(target[key]);
    }
  }
  return cloneTarget;
};
