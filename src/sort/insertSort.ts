import { exch } from "./utils.ts";

function insertSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      exch(arr, j, j - 1);
    }
  }

  return arr;
}

console.log(insertSort([1, 2, 3, 11, 1, 1, 333, 123, 121, 1, 333, 11231, 55]));
