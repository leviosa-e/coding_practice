let len;

// 建立大顶堆
function buildMaxHeap(arr) {
  len = arr.length;
  let halfLen = Math.floor(len / 2);
  for (let i = halfLen; i >= 0; i--) heapify(arr, i);
}

// 堆调整
function heapify(arr, i) {
  let largest = i,
    left = i * 2 + 1,
    right = i * 2 + 2;
  if (left < len && arr[left] > arr[largest]) largest = left;
  if (right < len && arr[right] > arr[largest]) largest = right;
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, largest);
  }
}

// 堆排序
function heapSort(arr) {
  buildMaxHeap(arr);

  for (let i = len - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    len--;
    heapify(arr, 0);
  }

  return arr;
}

let arr1 = [
  3, 5, 3, 0, 8, 6, 1, 5, 8, 6, 2, 4, 9, 4, 7, 0, 1, 8, 9, 7, 3, 1, 2, 5, 9, 7,
  4, 0, 2, 6,
];
heapSort(arr1);
console.log(arr1);
