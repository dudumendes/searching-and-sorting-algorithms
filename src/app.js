import { optimunBubbleSort } from './sorting/bubbleSort'
import { selectionSort } from './sorting/selectionSort'
import { insertionSort } from './sorting/insertionSort'

let numbers = [13, 8, 7, 6, 2, 1], numbers2 = [13, 8, 7, 6, 2, 1], numbers3 = [13, 8, 7, 6, 2, 1]

insertionSort(numbers3)
console.log(numbers3)

selectionSort(numbers)
console.log(numbers)

optimunBubbleSort(numbers2)
console.log(numbers2)
