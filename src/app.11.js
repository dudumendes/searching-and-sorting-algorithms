import { quickSort } from './sorting/quickSort'
import { createRandomArray, createSortedArrayDesc, createSortedArrayAsc } from './util/array'

let numbers = createRandomArray(10000)
let sortedNumbersAsc = createSortedArrayAsc(10000)
let sortedNumbersDesc = createSortedArrayDesc(10000)

console.time('quickSort random');
quickSort(numbers, 0, numbers.length - 1)
console.timeEnd('quickSort random');

console.time('quickSort sorted asc');
quickSort(sortedNumbersAsc, 0, sortedNumbersAsc.length - 1)
console.timeEnd('quickSort sorted asc');

console.time('quickSort sorted desc');
quickSort(sortedNumbersDesc, 0, sortedNumbersDesc.length - 1)
console.timeEnd('quickSort sorted desc');