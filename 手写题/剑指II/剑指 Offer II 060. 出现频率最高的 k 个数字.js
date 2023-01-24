var topKFrequent = function (nums, k) {
  const numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (numsMap.has(nums[i])) numsMap.set(nums[i], numsMap.get(nums[i]) + 1);
    else numsMap.set(nums[i], 1);
  }
  const arr = [];
  for (let [key, value] of numsMap) {
    arr.push([key, value]);
  }
  const ret = [];
  quickSort(arr, 0, arr.length - 1, ret, 0, k);
  console.log(ret);
  return ret;

  function quickSort(arr, l, r, ret, retIndex, k) {
    console.log("---");
    let i = l,
      j = r,
      tmp;
    while (i < j) {
      while (i < j && arr[j][1] <= arr[l][1]) j--;
      while (i < j && arr[i][1] >= arr[l][1]) i++;
      tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    arr[i] = arr[l];
    arr[l] = tmp;
    if (k <= i - l) {
      console.log(arr);
      quickSort(arr, l, i - 1, ret, retIndex, k);
    } else {
      for (let p = l; p <= i; p++) {
        console.log(arr);
        ret[retIndex++] = arr[p][0];
      }
      if (k > i - l + 1) {
        quickSort(arr, i + 1, r, ret, retIndex, k - (i - l + 1));
      }
    }
  }
};

topKFrequent([1, 1, 1, 2, 2, 3], 2);
