import { bubbleSort, bubbleSortRevenge, optimunBubbleSort } from './sorting/bubbleSort'

let numbers = [13, 8, 7, 6, 2, 1], numbers2 = [13, 8, 7, 6, 2, 1]
let ordered = [1, 2, 7, 6, 8, 13]

optimunBubbleSort(numbers)
bubbleSortRevenge(numbers2)
optimunBubbleSort(ordered)

console.log(numbers)
console.log(numbers2)
console.log(ordered)