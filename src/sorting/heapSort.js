export function heapSort(vector) {
    for (let i = Math.floor(vector.length/2) - 1; i >= 0; i--) {
        maxHeapfy(vector, i, vector.length);
    }

    for (let end = vector.length - 1; end >= 1; end--) {
        [vector[0], vector[end]] = [vector[end], vector[0]]
        maxHeapfy(vector, 0, end)
    }
}

export function heapSortMin(vector) {
    for (let i = Math.floor(vector.length/2) - 1; i >= 0; i--) {
        minHeapfy(vector, i, vector.length);
    }

    for (let start = 1; start < vector.length; start++) {
        minHeapfy(vector, start, vector.length)
    }
}

function maxHeapfy(vector, start, end) {

    let maximum = start
    let left = 2 * start + 1
    let right = 2 * start + 2

    if (left < end && vector[left] > vector[maximum]) {
        maximum = left
    }

    if (right < end && vector[right] > vector[maximum]) {
        maximum = right
    }

    if (maximum != start) {
        [vector[maximum], vector[start]] = [vector[start], vector[maximum]]
        maxHeapfy(vector, maximum, end)
    }
}

function minHeapfy(vector, start, end) {

}