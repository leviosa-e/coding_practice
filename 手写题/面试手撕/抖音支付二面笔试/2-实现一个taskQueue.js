/* 
实现一个任务队列，1秒后打印1，3秒后打印2，4秒后打印3

new Queue().
  task(1000, ()=>{
    console.log('1')
  }).
  task(2000, ()=>{
    console.log('2')
  }).
  task(1000, ()=>{
    console.log('3')
  }).
  start()
  
*/

class Queue {
  static taskQueue = [];

  task(wait, func) {
    console.log(wait);
    Queue.taskQueue.push({ wait, func });
    return new Queue(); // 链式调用，必须返回一个新实例
  }

  start() {
    let sumWait = 0, // 时间是累加的
      len = Queue.taskQueue.length; // 注意这里需要把最初数组长度存出来，否则 for 循环里数组长度的是会动态变化的
    for (let i = 0; i < len; i++) {
      let { wait, func } = Queue.taskQueue.shift();
      sumWait += wait;
      setTimeout(func, sumWait);
    }
  }
}

new Queue()
  .task(1000, () => {
    console.log("1");
  })
  .task(2000, () => {
    console.log("2");
  })
  .task(1000, () => {
    console.log("3");
  })
  .start();
