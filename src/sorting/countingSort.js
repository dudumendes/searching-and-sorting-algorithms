export function countingSort(vector, max) {
    let counter = []
    let sorted = []

    //First step
    for(let i = 0; i <= max; i++) {
        counter[i] = 0
    }
    console.log(`1 - counter: ${counter}`)

    for(let i = 0; i < vector.length; i++) {
        counter[vector[i]] += 1
    }
    console.log(`2 - counter: ${counter}`)

    for(let i = 1; i < counter.length; i++) {
        counter[i] += counter[i - 1]
    }
    console.log(`3 - counter: ${counter}`)

    for(let i = 0; i < vector.length; i++) {
       sorted[counter[vector[i]] - 1] = vector[i]
       counter[vector[i]] -= 1
    }

    return sorted
}