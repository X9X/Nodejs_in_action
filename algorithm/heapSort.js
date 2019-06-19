function left(i) {
  return 2 * i + 1;
}
function right(i) {
  return 2 * i + 2;
}

function parent(i) {
  return Math.floor(i / 2) - 1;
}

function maxHeapify(arr, i) {
  var l = left(i);
  var r = right(i);
  var largest = i;
  if (l <= arr.heapSize && arr[l] > arr[largest]) {
    largest = l;
  }
  if (r <= arr.heapSize && arr[r] > arr[largest]) {
    largest = r;
  }
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    maxHeapify(arr, largest);
  }
}

function buildMapHeap(arr) {
  arr.heapSize = arr.length - 1;
  for (let i = parent(arr.heapSize); i >= 0; i--) {
    maxHeapify(arr, i);
  }
}

function heapSort(arr) {
  buildMapHeap(arr);
  console.log(arr);
  for (let i = arr.length - 1; i > 0; i--) {
    [arr[i], arr[0]] = [arr[0], arr[i]];
    arr.heapSize -= 1;
    maxHeapify(arr, 0);
  }
  return arr;
}

console.log(heapSort([1, 3, 5, 7, 9, 2, 4, 6, 8, 0]));
