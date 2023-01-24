module.exports = function deepCopy(target) {
  if (typeof target === "object") {
    let copyTarget = Array.isArray(target) ? [] : {};
    for (const key in target) {
      copyTarget[key] = deepCopy(target[key]);
    }
    return copyTarget;
  } else {
    return target;
  }
};
