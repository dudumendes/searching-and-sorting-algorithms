import Element from './searching/Element'
import Heap from './searching/Heap'

let numbers = [100, 42, 50, 41, 39, 48, 43]

let heap = new Heap(7)

numbers.forEach( key => heap.add(new Element(key)))

console.log(heap._elements)
let max = heap.remove()
console.log(`max: ${max}`)
console.log(heap._elements)

max = heap.remove()
console.log(`max: ${max}`)
console.log(heap._elements)