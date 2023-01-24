function minPathSum(matrix) {
  let m = matrix.length,
    n = matrix[0].length;
  if (m > 1) for (let i = 1; i < m; i++) matrix[i][0] += matrix[i - 1][0];
  if (n > 1) for (let j = 1; j < n; j++) matrix[0][j] += matrix[0][j - 1];
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      matrix[i][j] =
        Math.min(matrix[i - 1][j], matrix[i][j - 1]) + matrix[i][j];
    }
  }
  console.log(matrix);
  return matrix[m - 1][n - 1];
}

let rst = minPathSum([
  [1, 3, 0, 3, 3, 3, 7, 5, 3, 7],
  [8, 4, 7, 1, 1, 8, 1, 0, 7, 2],
  [4, 3, 2, 3, 6, 8, 7, 9, 8, 3],
  [2, 2, 6, 3, 7, 1, 8, 4, 8, 2],
  [2, 9, 8, 1, 0, 9, 1, 2, 2, 8],
  [6, 8, 1, 8, 1, 9, 8, 8, 8, 6],
  [1, 1, 0, 9, 6, 7, 3, 4, 4, 1],
  [8, 6, 0, 7, 9, 1, 6, 0, 5, 8],
  [8, 1, 6, 1, 9, 7, 0, 7, 7, 9],
  [5, 0, 2, 6, 2, 8, 5, 5, 4, 9],
]);
console.log(rst);
