function quickSort(arr, l, r) {
  if (l >= r) return;
  let i = l,
    j = r,
    pivot = Math.floor(Math.random() * (r - l + 1) + l);
  [arr[l], arr[pivot]] = [arr[pivot], arr[l]];
  while (i < j) {
    while (i < j && arr[j] >= arr[l]) j--;
    while (i < j && arr[i] <= arr[l]) i++;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  [arr[l], arr[i]] = [arr[i], arr[l]];
  quickSort(arr, l, i - 1);
  quickSort(arr, i + 1, r);
}

let arr1 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
quickSort(arr1, 0, 9);
console.log(arr1);
