import { countingSort } from './sorting/countingSort'

let numbers = [2,2,5,3,6,7,3]

numbers = countingSort(numbers, 7)
console.log(numbers)