import { mergeSort } from './sorting/mergeSort'

let numbers = [1, 4, 1, 2, 7, 5, 2], numbers2 = [13, 8, 7, 6, 2, 1], numbers3 = [13, 8, 7, 6, 2, 1]

console.log(numbers)
mergeSort(numbers, numbers[0], numbers[numbers.length-1])
console.log(numbers)