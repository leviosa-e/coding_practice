let cnt = 1;
let container = document.getElementById("container");

// this 指向问题
// container.addEventListener('mousemove', () => {
//  console.log(this) // window
//  container.innerHTML = cnt++
// })

// container.addEventListener('mousemove', function() {
//  console.log(this) // <div id="container"></div>
//  this.innerHTML = cnt++
// })

container.addEventListener("mousemove", throttle(add, 1000));

function add(e) {
  console.log(this);
  console.log(e);
  container.innerHTML = cnt++;
}

// 方法一：时间戳
/* function throttle(func, wait) {
  let pre = 0;

  return function () {
    let context = this;
    let args = arguments;
    let now = Date.now();

    if (now - pre > wait) {
      func.apply(context, args);
      pre = now;
    }
  };
} */

// 方法二：定时器
function throttle(func, wait) {
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
