var longestIncreasingPath = function (matrix) {
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let rst = 0,
    memo1 = new Array(matrix.length).fill(0);
  let memo = memo1.map(() => new Array(matrix[0].length).fill(0));
  function inArea(grid, r, c) {
    if (r >= 0 && r <= grid.length - 1 && c >= 0 && c <= grid[0].length - 1)
      return true;
    return false;
  }
  function dfs(grid, r, c) {
    if (memo[r][c] !== 0) return memo[r][c];
    memo[r][c] = 1;
    for (let i = 0; i < dirs.length; i++) {
      let nr = r + dirs[i][0],
        nc = c + dirs[i][1];
      if (inArea(grid, nr, nc) && grid[nr][nc] > grid[r][c]) {
        memo[r][c] = Math.max(memo[r][c], dfs(grid, nr, nc) + 1);
      }
    }
    return memo[r][c];
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      rst = Math.max(rst, dfs(matrix, i, j));
    }
  }
  return rst;
};

longestIncreasingPath([
  [4, 3, 3, 6, 6, 3, 2, 1, 0, 7],
  [1, 8, 2, 8, 5, 9, 2, 8, 3, 1],
  [8, 0, 9, 2, 4, 3, 2, 4, 3, 7],
  [1, 2, 2, 6, 3, 0, 3, 9, 7, 0],
  [7, 4, 3, 8, 8, 3, 2, 4, 6, 8],
  [2, 8, 9, 2, 9, 3, 0, 8, 7, 8],
  [8, 9, 9, 4, 6, 3, 3, 4, 9, 6],
  [2, 8, 3, 8, 1, 3, 7, 3, 0, 7],
  [2, 1, 1, 6, 4, 1, 0, 8, 1, 6],
  [4, 1, 3, 6, 3, 4, 4, 4, 0, 3],
]);
