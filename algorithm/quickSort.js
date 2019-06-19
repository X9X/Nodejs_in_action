function quickSort1(arr, start, end) {
  let i = start || 0;
  let j = end || arr.length - 1;
  let startIndex = i;
  let endIndex = j;
  if (j - i < 1) return;
  let k = arr[i];
  while (j > i) {
    if (arr[j] < k) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      while (j > i) {
        if (arr[i] > k) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          j--;
          break;
        } else {
          i++;
        }
      }
    } else {
      j--;
    }
  }
  startIndex < i - 1 && quickSort1(arr, startIndex, i - 1);
  endIndex > i + 1 && quickSort1(arr, i + 1, endIndex);
  return arr;
}
function quickSort(arr) {
  let x = arr.shift();
  return x !== undefined
    ? quickSort(arr.filter(i => i <= x)).concat(
        [x],
        quickSort(arr.filter(i => i > x))
      )
    : [];
}
var arr = [1, 3, 5, 7, 9, 2, 4, 6, 8, 0];
console.log(quickSort(arr));
