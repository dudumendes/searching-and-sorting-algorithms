import { optimunBubbleSort } from './sorting/bubbleSort'
import { selectionSort } from './sorting/selectionSort'

let numbers = [13, 8, 7, 6, 2, 1], numbers2 = [13, 8, 7, 6, 2, 1]

selectionSort(numbers.reverse())
console.log(numbers)

optimunBubbleSort(numbers2.reverse())
console.log(numbers2)
