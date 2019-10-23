export function quickSort(vector, start, end) {
    if (start < end) {
      let pivot = partition(vector, start, end);
      quickSort(vector, start, pivot - 1);
      quickSort(vector, pivot + 1, end);
    }
  }

  function partition(vector, start, end) {
      let i = start - 1

      for (let j = start; j < end; j++) {
          if (vector[j] < vector[end]) {
              i++
              [vector[i], vector[j]] = [vector[j], vector[i]]
          }
      }

      [vector[i + 1], vector[end]] = [vector[end], vector[i + 1]]

      return i + 1
  }