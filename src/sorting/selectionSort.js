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
        console.log(vector)
    }
    console.log(`swapTotal: ${swapTotal}, comparisons: ${comparisonTotal}`)

}


export function selectionSortMax(vector) {
    let swapTotal = 0;
    let comparisonTotal = 0;

    for (let i = 0; i < vector.length - 1; i++) {
        let maximum = vector.length - 1 - i
        
        for (let j = 0; j < vector.length - 2 - i; j++) {
            comparisonTotal++

            if (vector[j] > vector[maximum]) {
                maximum = j
            }
        }

        if (maximum != vector.length - 1 - i) {
            [vector[vector.length - 1 - i], vector[maximum]] =
                [vector[maximum], vector[vector.length - 1 - i]]
            swapTotal++
        }
        console.log(vector)
    }
    console.log(`swapTotal: ${swapTotal}, comparisons: ${comparisonTotal}`)
}

export function selectionSortMax2(vector) {
    let swapTotal = 0;
    let comparisonTotal = 0;

    for (let i = vector.length - 1; i > 0; i--) {
        let maximum = i
        
        for (let j = i - 1; j >= 0; j--) {
            comparisonTotal++

            if (vector[j] > vector[maximum]) {
                maximum = j
            }
        }

        if (maximum != i) {
            [vector[i], vector[maximum]] =[vector[maximum], vector[i]]
            swapTotal++
        }
        console.log(vector)
    }
    console.log(`swapTotal: ${swapTotal}, comparisons: ${comparisonTotal}`)

}

