/* 
  有一队列 n 名候选人，身高各不相同，从 1-n ，各自有对应的能力值
  要求按身高递增，同时保持原先队列相对顺序，怎样才能使团队的总能力值最大？
  例1： [3, 1, 4, 2] [10, 20, 30, 40]
  输出：60（选身高为1和2的）
  例2： [1, 2, 3, 4] [10, 10, 10, 10]
  输出：40 
*/
function maxTeam(heightArr, abilityArr) {
  let len = heightArr.length,
    dp = new Array(len).fill(0),
    rst = 0;
  for (let i = len - 1; i >= 0; i--) {
    let height = heightArr[i],
      max = 0;
    for (let j = i + 1; j <= len - 1; j++) {
      if (heightArr[j] > height) max = Math.max(max, dp[j]);
    }
    dp[i] = max + abilityArr[i];
    rst = Math.max(dp[i], rst);
  }
  console.log(dp);
  return rst;
}

console.log(maxTeam([3, 1, 4, 2], [10, 20, 30, 40]));
