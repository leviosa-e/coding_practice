function throttle(func, wait) {
  let pre = 0;

  return function () {
    let context = this;
    let args = arguments;
    let now = Date.now();

    if (now - pre >= wait) {
      func.apply(context, args);
      pre = now;
    }
  };
}

function throttle2(func, wait) {
  let timer;

  return function () {
    let context = this;
    let args = arguments;

    if (!timer) {
      func.apply(context, args);
      timer = setTimeout(function () {
        timer = null;
      }, wait);
    }
  };
}
