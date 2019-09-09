export function mergeSort(vector, start, end) {
    if (start < end) {
        let middle = Math.floor( (start + end) / 2 )
        mergeSort(vector, start, middle)
        mergeSort(vector, middle + 1, end)
        merge(vector, start, middle, end)
    }
}

function merge(vector, start, middle, end) {
    let sorted = []
    let left = start
    let right = middle + 1
    let actual = start
    
    while(!endLeft || !endRight) {
        if (!endLeft && !endRight) {
            if (vector[left] < vector[right]) {
                sorted[actual++] = vector[left++]
            } else {
                sorted[actual++] = vector[right++]
            }
        }

        if (endLeft) {
            while(!endRight) {
                sorted[actual++] = vector[right++]
            }
        }

        if (endRight) {
            while(!endLeft) {
                sorted[actual++] = vector[left++]
            }
        }

        //sorted[actual++] = (vector[left] < vector[right]) ? vector[left] : vector[right]
    }
}