import { optimunBubbleSort } from './sorting/bubbleSort'
import { mergeSort } from './sorting/mergeSort'
import { insertionSort } from './sorting/insertionSort'

let numbers = [1, 4, 1, 2, 7, 5, 2], numbers2 = [13, 8, 7, 6, 2, 1], numbers3 = [13, 8, 7, 6, 2, 1]

// insertionSort(numbers3)
// console.log(numbers3)

numbers = mergeSort(numbers, numbers[0], numbers[length-1])
console.log(numbers)

// optimunBubbleSort(numbers2)
// console.log(numbers2)
