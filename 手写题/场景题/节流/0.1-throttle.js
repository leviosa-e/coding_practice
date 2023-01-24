function throttle(func, wait) {
  let prev = 0;

  return function (...args) {
    let now = Date.now(),
      _this = this;

    if (now - prev >= wait) {
      func.apply(_this, args);
      prev = now;
    }
  };
}

function throttleTimer(func, wait) {
  let timer = null;
  return function (...args) {
    let _this = this;

    if (!timer) {
      // 马上执行
      func.apply(_this, args);
      timer = setTimeout(function () {
        clearTimeout(timer);
        timer = null;
      }, wait);
    }
  };
}
