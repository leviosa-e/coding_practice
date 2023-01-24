function test(n, str) {
  let cnt = n;
  let arr = str.split(" ");
  let rst = 0;
  for (let r = n - 1; r >= 0; r--) {
    let tmp = arr[r];
    for (let l = r; l >= 0; l--) {
      if (l !== r) tmp = tmp * arr[l];
      let temp = tmp;
      while (temp % 10 === 0) {
        temp = temp / 10;
        rst++;
      }
    }
  }
  console.log(rst);
}

test(3, "8 2 5");
