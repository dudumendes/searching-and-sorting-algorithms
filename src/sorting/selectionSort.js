export function selectionSort(vector) {
    let swapTotal = 0;
    let comparisonTotal = 0;

    for (let i = 0; i < vector.length - 1; i++) {
        let minimum = i
        
        for (let j = i + 1; j < vector.length; j++) {
            comparisonTotal++

            if (vector[j] < vector[minimum]) {
                minimum = j
            }
        }

        if (minimum !=  i) {
            [vector[i], vector[minimum]] = [vector[minimum], vector[i]]
            swapTotal++
        }
    }
    console.log(`swapTotal: ${swapTotal}, comparisons: ${comparisonTotal}`)

}