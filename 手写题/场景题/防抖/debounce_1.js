function debounce(func, wait) {
  let timer;

  return function () {
    let context = this;
    let args = arguments;

    clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(context, args);
    }, wait);
  };
}
