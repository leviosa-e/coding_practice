function quickSort(nums, l, r) {
  if (l >= r) return;
  let i = l,
    j = r,
    tmp = nums[i];
  while (i < j) {
    while (i < j && nums[j] >= nums[l]) j--;
    while (i < j && nums[i] <= nums[l]) i++;
    tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  }
  nums[i] = nums[l];
  nums[l] = tmp;
  quickSort(nums, l, i - 1);
  quickSort(nums, i + 1, r);
}

quickSort(arr, 0, arr.length - 1);

/* function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

function partition(array, start, end) {
  let j = start;
  let pivot = array[end];
  for (let i = start; i <= end; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j++);
    }
  }
  return j - 1;
}

function quickSort(array, start = 0, end = array.length - 1) {
  if (end - start < 1) return array;
  let pivotIndex = partition(array, start, end);
  quickSort(array, start, pivotIndex - 1);
  quickSort(array, pivotIndex + 1, end);
  return array;
} */
