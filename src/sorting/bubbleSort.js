function bubbleSort(vector) {
    swapTotal = 0;
    comparisonTotal = 0;
    for (let j = 0; j < vector.length - 1; j++) {
        for (let i = 0; i < vector.length - 1; i++) {
            comparisonTotal++
            if (vector[i] > vector[i + 1]) {
                [vector[i], vector[i + 1]] = [vector[i + 1], vector[i]]
                swapTotal++
            }
        }
    }    
    console.log(`swapTotal: ${swapTotal}, comparisons: ${comparisonTotal}`)
}

numbers = [13, 8, 7, 6, 2, 1]

bubbleSort(numbers)

console.log(numbers)