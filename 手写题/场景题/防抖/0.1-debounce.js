function debounce(func, wait) {
  let timer;
  return function (...args) {
    let _this = this;
    clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(_this, args);
    }, wait);
  };
}
