export function mergeSort(vector, start, end) {
    if (start < end) {
        let middle = Math.floor((start + end) / 2)
        mergeSort(vector, start, middle)
        mergeSort(vector, middle + 1, end)
        merge(vector, start, middle, end)
    }
}

function merge(vector, start, middle, end) {
    let size = end - start + 1
    let sorted = []
    let left = start
    let right = middle + 1
    let actual = start
    let endLeft = false, endRight = false

    while (!endLeft || !endRight) {
        if (!endLeft && !endRight) {
            if (vector[left] < vector[right]) {
                sorted[actual++] = vector[left++]
            } else {
                sorted[actual++] = vector[right++]
            }

        } else if (endLeft) {
            sorted[actual++] = vector[right++]
        } else {
            sorted[actual++] = vector[left++]
        }

        endLeft = left > middle ? true : false
        endRight = right > end ? true : false
    }

    for (let i = 0; i < size; i++) {
        vector[start + i] = sorted[i]
    }
}
