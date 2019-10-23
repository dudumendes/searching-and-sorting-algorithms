import Element from './searching/Element'
import Heap from './searching/Heap'

let element = new Element(10)
element.id = 30
console.log(element.id)
console.log(element)

let numbers = [8, 7, 3, 10]

let heap = new Heap(5)

numbers.forEach( key => heap.add(new Element(key)))

console.log(heap._elements)