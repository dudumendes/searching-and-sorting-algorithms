export function insertionSort(vector) {
    for (let i = 1; i < vector.length; i++) {
        let atual = vector[i]
        let j;
        for (j = i - 1; j >= 0 && atual < vector[j]; j--) {
                vector[j+1] = vector[j]
        }
        vector[j + 1] = atual
    }
}