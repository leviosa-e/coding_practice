var p1 = Promise.resolve("p1 then");

var p2 = new Promise((resolve, reject) => {
  console.log("p2 start");
  resolve("p2 resolved");
});

p2.then((res) => {
  console.log(res);
  setTimeout(() => {
    console.log("setTimeout");
  }, 0);
  p1.then((res) => {
    console.log(res);
  });
  console.log("after p1 then");
});

/* 
  p2 start
  p2 resolved
  after p1 then
  p1 then
  Promise {<fulfilled>: undefined}
  setTimeout
*/
