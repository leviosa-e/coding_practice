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

container.addEventListener("mousemove", debounce(add, 1000));

function add(e) {
  console.log(this);
  console.log(e);
  container.innerHTML = cnt++;
}

// 第一版
/* function debounce(func, wait) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(func, wait);
  };
} */

// 第一版 + 修改 this 指向
/* function debounce(func, wait) {
  let timer;

  return function () {
    let context = this;

    clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(context);
    }, wait);
  };
} */

// 第一版 + 修改 this 指向 + 修复 event 对象
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
