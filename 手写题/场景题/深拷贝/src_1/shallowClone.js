module.exports = function shallowClone(target) {
  let targetObj = {};
  for (const key in target) {
    targetObj[key] = target[key];
  }
  return targetObj;
};
