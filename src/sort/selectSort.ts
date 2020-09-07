import { exch } from "./utils.ts";

function selectSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    exch(arr, i, min);
  }
  return arr;
}

console.log(selectSort([3, 3, 4, 1, 6, 7, 8, 33, 12, 1, 0]));
