/* 
  闭包陷阱：外层函数保存的作用域链已经不是最新的了，这时候去执行暴露出来的内层函数，
           函数内使用的就不是最新的状态。
           所以需要重新执行一次外层函数，保存最新的作用域链，创建一个新的内层函数
           重新暴露给外界。
 */

let getState = () => 1;

function outerFunc() {
  let state = getState();
  function innerFunc() {
    console.log(state);
  }
  return {
    innerFunc,
  };
}

let outerObj = outerFunc();
outerObj.innerFunc(); // 1

getState = () => 2;
outerObj.innerFunc(); // 1

let outerObj2 = outerFunc();
outerObj2.innerFunc(); // 2
