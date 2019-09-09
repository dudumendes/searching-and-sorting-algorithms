export function countingSort(vector, max) {
    let counter = []
    let ordered = []

    //First step
    for(let i = 0; i <= max; i++) {
        counter[i] = 0
    }

    for(let i = 0; i < vector.length; i++) {
        counter[vector[i]] += 1
    }

    for(let i = 1; i < counter.length; i++) {
        counter[i] += counter[i - 1]
    }

    for(let i = 0; i < vector.length; i++) {
       ordered[counter[vector[i]] - 1] = vector[i]
       counter[vector[i]] -= 1
    }

    return ordered
}