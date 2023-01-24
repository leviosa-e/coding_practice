module.exports = function deepCopy(target, map = new WeakMap()) {
  if (typeof target === "object") {
    let copyTarget = Array.isArray(target) ? [] : {};
    if (map.get(target)) {
      return map.get(target);
    }
    map.set(target, copyTarget);
    for (const key in target) {
      copyTarget[key] = deepCopy(target[key], map);
    }
    return copyTarget;
  } else {
    return target;
  }
};
