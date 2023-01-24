module.exports = function shallowCopy(target) {
  let copyTarget = {};
  for (const key in target) {
    copyTarget[key] = target[key];
  }
  return copyTarget;
};
