function LCS(s1, s2) {
  // write code here
  let dp = [],
    len1 = s1.length,
    len2 = s2.length;
  for (let i = 0; i <= len1; i++) dp.push([0]);
  for (let j = 0; j < len2; j++) dp[0].push(0);
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (s1[i - 1] === s2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
    }
  }
  console.log(dp);
  return dp[len1][len2];
}

LCS("1A2C3D4B56", "B1D23A456A");
