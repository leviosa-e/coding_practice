/* 
  自定义 Hook：
    每秒更新一次，返回当前距离 2022/12/31 所剩秒数

  思路：
    1、必须利用 setState 改变数据，React 才会知道需要更新组件

    2、通过 useEffect，在组件挂载时开启定时器，每隔一秒通过 setState 改变倒计时秒数 

    3、return 倒计时秒数
*/

// hook.js
import { useState, useEffect } from "react";

let useCountTime = function (target) {
  const [countTime, setCountTime] = useState(0);

  let now = Date.now(),
    targetTime = new Date(target).getTime();

  useEffect(() => {
    let timer = setInterval(() => {
      setCountTime(Math.floor((targetTime - now) / 1000));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  return countTime;
};

export { useCountTime };

// App.js
import { useCountTime } from "./hook";

export default function App() {
  const countTime = useCountTime("2022/12/31");
  return (
    <div className="App">
      <h1>{countTime}</h1>
    </div>
  );
}
